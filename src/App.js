import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export class App extends Component {

state = {
  progress : 0,
}

setProgress = (progress) => {
  this.setState({progress : progress})
}

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <Routes>
            <Route
              exact
              path="/"
              key="general"
              element={
                <News setProgress={this.setProgress}  pageSize={12} country={"in"} category={"general"} />
              }
            />

            <Route
              exact
              path="/home"
              key="general"
              element={
                <News setProgress={this.setProgress}  pageSize={12} country={"in"} category={"general"} />
              }
            />

            <Route
              exact
              path="/entertainment"
              key="entertainment"
              element={
                <News setProgress={this.setProgress}  pageSize={12} country={"in"} category={"entertainment"} />
              }
            />

            <Route
              exact
              path="/business"
              key="business"
              element={
                <News setProgress={this.setProgress}  pageSize={12} country={"in"} category={"business"} />
              }
            />

            <Route
              exact
              path="/sports"
              key="sports"
              element={
                <News setProgress={this.setProgress}  pageSize={12} country={"in"} category={"sports"} />
              }
            />

            <Route
              exact
              path="/health"
              key="health"
              element={
                <News setProgress={this.setProgress}  pageSize={12} country={"in"} category={"health"} />
              }
            />

            <Route
              exact
              path="/technology"
              key="technology"
              element={
                <News setProgress={this.setProgress}  pageSize={12} country={"in"} category={"technology"} />
              }
            />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </>
    );
  }
}

export default App;
