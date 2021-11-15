import './App.css';

  import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

  export class App extends Component {
    render() {
      return (
        <>
        <Router>
          <NavBar/>
              <Routes>
                <Route exact path = "/" key="general" element = {<News pageSize = {12} country = {'in'} category = {'general'}/>}/>

                <Route exact path = "/home" key="general" element = {<News pageSize = {12} country = {'in'} category = {'general'}/>}/>

                <Route exact path = "/entertainment" key="entertainment" element = {<News pageSize = {12} country = {'in'} category = {'entertainment'}/>}/>

                <Route exact path = "/business" key="business" element = {<News pageSize = {12} country = {'in'} category = {'business'}/>}/>

                <Route exact path = "/sports" key="sports" element = {<News pageSize = {12} country = {'in'} category = {'sports'}/>}/>

                <Route exact path = "/health" key="health" element = {<News pageSize = {12} country = {'in'} category = {'health'}/>}/>
                
                <Route exact path = "/technology" key="technology" element = {<News pageSize = {12} country = {'in'} category = {'technology'}/>}/>
              </Routes>
          <Footer/>
        </Router>
        </>
      )
    }
  }
  
  export default App
  
