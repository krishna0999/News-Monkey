import React, { Component } from "react";
import Loadingsign from "./Loadingsign";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "12",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  //Constructor defined to set the state of articles
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 1,
    };
    document.title = `News Monkey - ${this.props.category}`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b30ced5063d495898b2dbf1a10d79ed&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  fetchMoreData = async () => {
    this.setState({ page : this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b30ced5063d495898b2dbf1a10d79ed&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  //Function to fetch data from the news api
  async componentDidMount() {
    this.updateNews();
  }

  render() {
    return (
      <>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loadingsign />}
        >
          <h1 className="text-center" style={{ margin: "30px 0" }}>
            News Monkey - Top Headlines!
          </h1>

          <div className="d-flex flex-wrap my-3 container">
            {
              this.state.articles.map(
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
}

export default News;
