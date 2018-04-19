import React, { Component } from 'react';
import './stylesheet/about-me.css';

export default class AboutMe extends Component {


  render() {
    return (
      <div>
        <div class="about-me-wrapper">
          <h2 class="section-header">Technologies and Skills</h2>

          <div className="about-me-grid">
            <div className="technology-grid">d</div>
            <div><h2>This is where I talk about tech</h2>
            <p>
              At the moment I am learning React and Redux. In terms of other
              technologies, I have a reasonable knowledge on Java, Haskell.
              You can find me talk about these things on <a href="#"></a>.
              I created tutorials, reviews, and gave general personal experience
              about my life.
            </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
