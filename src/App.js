import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyNavbar from './components/my-navbar';
import Home from './components/home'
import Contacts from './components/contacts';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MyNavbar />
          <Route exact path="/" component={Home} />
          <Route path="/contacts" component={Contacts} />
        </div>
      </Router>
    );
  }
}

export default App;
