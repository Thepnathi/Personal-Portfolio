import React, { Component } from 'react';
import './stylesheet/about-me.css';

export default class AboutMe extends Component {


  render() {
    return (
      <div>
        <div class="about-me-wrapper">
          <h2 class="section-header">Technologies and Skills</h2>
          <img className="image-cloud" src="../assets/images/wordcloud.svg"/>
        </div>
      </div>
    );
  }
}
