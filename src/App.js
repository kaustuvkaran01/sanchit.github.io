import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path ="/" component = { Home } />
        <Route path ="/projects" component = { Projects } />
        <Route path="/blogs" component = {Blogs} />
      </Switch>
    )
  }
}


export default App;
