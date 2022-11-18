import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=c84cce4c34ef48c2901335baf6cfbd21";

    let data = await fetch(url);
    let parsedSData = await data.json();
    console.log(parsedSData);
    this.setState({
      articles: parsedSData.articles,
    });
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="p-3">News 24x7 - Top Headlines</h1>
          <div className="row g-3">
            {this.state.articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
