import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, publishedAt, author, source } =
      this.props;
    return (
      <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : '90%', zIndex : '1'}}>
          {source}
        </span>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            <strong>{title}...</strong>
          </h5>
          <p className="card-text">
            <small className="text-muted">
              Published by {author ? author : "unknown"} on{" "}
              {new Date(publishedAt).toUTCString()}
            </small>
          </p>
          <p className="card-desc">{description}...</p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-dark"
            rel="noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
