import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title , description, imageUrl, newsUrl} = this.props;
    return (
      <div className="card">
        <img src={imageUrl ? imageUrl : "https://aylien.com/images/uploads/logos/News_API_logo_green_black_large.svg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">
            {description}...
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-outline-secondary" rel="noreferrer">
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
