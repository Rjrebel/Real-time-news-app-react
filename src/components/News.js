import React, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title =
      this.capitalizeFirstLetter(this.props.category) + " - News 24x7";
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0852d8316a1747b88780dde17affe3a7&page=1&pageSize=${this.props.pageSize}`;

    this.setState({
      loading: true,
    });

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  // handleNextClick = async () => {
  //   console.log("Next");

  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateNews();
  // };

  // handlePrevClick = async () => {
  //   console.log("Prev");
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateNews();
  // };

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    const  url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c84cce4c34ef48c2901335baf6cfbd21&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.articles);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  async componentDidMount() {
    this.updateNews();
  }

  render() {
    return (
      <>
        <div className="container my-3 mt-5">
          <h1 className="p-3 text-center">
            News 24x7 - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </h1>
          {this.state.loading && <Loading />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Loading />}
          >
            {
              <div className="container">
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
                          author={element.author}
                          date={element.publishedAt}
                          source={element.source.name}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            }
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default News;


