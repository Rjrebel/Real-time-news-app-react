import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="p-3">News 24x7 - Top Headlines</h1>
          <div className="row g-3">
            <div className="col-md-4"><NewsItem  title="myTtitle" description="this is desc" /></div>
            <div className="col-md-4"><NewsItem  title="myTtitle" description="this is desc" /></div>
            <div className="col-md-4"><NewsItem  title="myTtitle" description="this is desc" /></div>
         
          </div>
        </div>
      </>
    );
  }
}

export default News;
