import React, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  handleNextClick = async () => {
    console.log("Next");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c84cce4c34ef48c2901335baf6cfbd21&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedSData = await data.json();
    console.log(parsedSData);
    this.setState({
      articles: parsedSData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };

  handlePrevClick = async () => {
    console.log("Prev");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c84cce4c34ef48c2901335baf6cfbd21&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedSData = await data.json();

    this.setState({
      articles: parsedSData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c84cce4c34ef48c2901335baf6cfbd21&page=1&pageSize=${this.props.pageSize}`;

    this.setState({
      loading: true,
    });

    let data = await fetch(url);
    let parsedSData = await data.json();
    console.log(parsedSData);
    this.setState({
      articles: parsedSData.articles,
      totalResuls: parsedSData.totalResuls,
      loading: false,
    });
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="p-3 text-center">News 24x7 - Top Headlines</h1>
          {this.state.loading && <Loading />}
          {!this.state.loading && (
            <div>
              <div className="row g-3">
                {this.state.articles.map((element) => {
                  return (
                    <div key={element.url} className="col-md-4">
                      <NewsItem
                        title={element.title ? element.title : ""}
                        description={
                          element.description ? element.description : ""
                        }
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="container mt-3 d-flex justify-content-between">
                <button
                  disabled={this.state.page <= 1}
                  onClick={this.handlePrevClick}
                  className="btn btn-dark"
                >
                  &larr; Previous
                </button>
                <button
                  disabled={
                    this.state.page + 1 >
                    Math.ceil(this.state.totalResuls / this.props.pageSize)
                  }
                  onClick={this.handleNextClick}
                  className="btn btn-dark"
                >
                  Next &rarr;
                </button>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default News;
