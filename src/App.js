import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { useState } from "react";
// import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = () => {

const [progress, setProgress] = useState(0);



    return (
      <>
        <Router>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={progress}
      />
          <Routes>
            <Route
              exact
              path="/"
              key="general"
              element={
                <News setProgress={setProgress}  pageSize={12} country={"in"} category={"general"} />
              }
            />

            <Route
              exact
              path="/home"
              key="general"
              element={
                <News setProgress={setProgress}  pageSize={12} country={"in"} category={"general"} />
              }
            />

            <Route
              exact
              path="/entertainment"
              key="entertainment"
              element={
                <News setProgress={setProgress}  pageSize={12} country={"in"} category={"entertainment"} />
              }
            />

            <Route
              exact
              path="/business"
              key="business"
              element={
                <News setProgress={setProgress}  pageSize={12} country={"in"} category={"business"} />
              }
            />

            <Route
              exact
              path="/sports"
              key="sports"
              element={
                <News setProgress={setProgress}  pageSize={12} country={"in"} category={"sports"} />
              }
            />

            <Route
              exact
              path="/health"
              key="health"
              element={
                <News setProgress={setProgress}  pageSize={12} country={"in"} category={"health"} />
              }
            />

            <Route
              exact
              path="/technology"
              key="technology"
              element={
                <News setProgress={setProgress}  pageSize={12} country={"in"} category={"technology"} />
              }
            />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </>
    );
}

export default App;
