import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// TODO: make sure to remove later // We may not need this because swipeable
import SwipeableViews from 'react-swipeable-views';
import MyNavbar from './components/my-navbar';
import Home from './components/home';
import Projects from './components/project';
import Contacts from './components/contacts';
import './App.css'
import {cyan500, black} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: 'black',
  },
});

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <Tabs className = "test"
        onChange={this.handleChange}
        value={this.state.slideIndex}
      >
        <Tab label="Home" value={0} />
        <Tab label="Project" value={1} />
        <Tab label="Blogs" value={2} />
        <Tab label="Contacts" value={3} />
        <Tab label="Github" value={4} />
      </Tabs>
      <SwipeableViews
        index={this.state.slideIndex} 
        onChangeIndex={this.handleChange}
      >
        <div >
          <Home />
        </div>
        <div style={styles.slide}>
          <Projects />
        </div>
        <div style={styles.slide}>
          3
        </div>
        <div style={styles.slide}>
          4
        </div>
        <div style={styles.slide}>
          5
        </div>
      </SwipeableViews>
    </MuiThemeProvider>
    );
  }
}
