import React, { useEffect, useState } from "react";
import Loadingsign from "./Loadingsign";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);
    

  const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4b30ced5063d495898b2dbf1a10d79ed&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(75);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults)
        props.setProgress(100);
  }

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4b30ced5063d495898b2dbf1a10d79ed&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

useEffect(() => {
  document.title = `News Monkey - ${props.category}`;
  updateNews();
}, [])

  
    return (
      <>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loadingsign />}
        >
          <h1 className="text-center" style={{ margin: "30px 0" , marginTop : '90px'}}>
            News Monkey - Top Headlines!
          </h1>

          <div className="d-flex flex-wrap my-3 container">
            {
              articles.map(
                (
                  element // Populating the articles by looping over the articles array
                ) => {
                  return (
                    <NewsItem
                      key={element.url}
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://i.gadgets360cdn.com/large/moto_watch_100_91mobiles_1636800423462.jpg"
                      }
                      newsUrl={element.url}
                      publishedAt={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                    />
                  );
                }
              )}
          </div>
        </InfiniteScroll>
      </>
    );
}

News.defaultProps = {
  country: "in",
  pageSize: "12",
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
