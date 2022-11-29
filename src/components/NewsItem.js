import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="card mt-3">
        <div style={{right : '0'}} className="position-absolute d-flex">
          <span
            className="badge rounded-pill text-bg-danger"
          >
            {source}
          </span>
        </div>

        <img
          src={
            imageUrl
              ? imageUrl
              : "https://aylien.com/images/uploads/logos/News_API_logo_green_black_large.svg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-outline-secondary"
            rel="noreferrer"
          >
            Read more
          </a>
          <p className="card-text mt-2">
            <small className="text-muted">
              By {author === null ? "Unknown" : author},{" "}
              {new Date(date).toDateString()}
            </small>
          </p>
        </div>
      </div>
    );
  }
}

export default NewsItem;
