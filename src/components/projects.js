import React, { Component } from 'react';
import './stylesheet/projects.css';

export default class Projects extends Component {
  render() {
    return (
      <div className="project-outer-wrapper">
        <h2 className="section-header">Project History</h2>
        <div>
          <p>I am currently focusing on Web development. You will see me occasionally switch to Android development.
            I am open to new ideas and technologies.
            One of my goal in 2018 is to create a project for businesses or other client,
            whether it will be for non-profit or as a freelance. </p>
        </div>

        <div className="project-wrapper">

          <div>
            <img className="project-screenshot" src="../assets/images/projects/portfolio-project-screenshot.png" />
          </div>

          <div>
            <p>Created this website to market my myself and showcase my skills. I will use this to track of my progress in my careers.
              This my first React projects.</p>
            <p>Challenges: Since, this is a portfolio. I placed heavy emphasis on design. The most difficult part was trying to deal with
            animations and responsiveness. Still working in progress...</p>
            <p>Technologies: React, React-Router, CSS-animation, React-Bootstrap, Github API</p>
            <button className="button-theme"><img src="../assets/github.svg" className="github-logo"/>GitHub</button>
            <button className="button-theme">Live</button>
          </div>

        </div>
      </div>
    );
  }
}
