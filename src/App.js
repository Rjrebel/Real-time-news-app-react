import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { Component } from "react";
import { Navbar } from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };

  setProgress =(progress) =>{
    this.setState({
      progress: progress,
    });
  }
  
  apiKey = "0852d8316a1747b88780dde17affe3a7"
  // apiKey = process.env.API_Key ..... to fetch data from env.local file 
  render() {
    let pageSize = 9;
    
     

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            // color="#f11946"
            color="yellow"
            height={3}
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="business"
                  pageSize={pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="sports"
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
