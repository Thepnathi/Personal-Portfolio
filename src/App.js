import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyNavbar from './components/my-navbar';
import AboutMe from './components/about-me';
import Home from './components/home'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MyNavbar />
          <Route exact path="/" component={Home} />
          <Route path="/about-me" component={AboutMe} />
        </div>
      </Router>
    );
  }
}

export default App;
