import React, { Component } from 'react';
import './projects.css';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <h2 className="section-header">Project History</h2>
        <div>
          <p>My of my projects are personal pet projects. I have created these tools to help me one way or another. With my limited time I
            am currently focusing on Web development. You will see me occasionally switch to Android development. One of my goal in 2018 is
             to create a project for businesses or other client, whether it will be for non-profit or as a freelance. </p>
        </div>

        <div className="project-wrapper">

          <div>
            <h3>Portfolio</h3>
            <img className="project-screenshot" src="../assets/images/projects/portfolio-project-screenshot.png" />
          </div>

          <div>
            <h3>Thep's Blog</h3>
            <img className="project-screenshot" src="../assets/images/projects/medium-project-screenshot.png" />
          </div>

          <div className="project-information">
            <p>Created this website to market my myself and showcase my skills. I will use this to track of my progress in my careers.
              This my first React projects.</p>
            <p>Challenges: Since, this is a portfolio. I placed heavy emphasis on design. The most difficult part was trying to deal with
            animations and responsiveness. Still working in progress...</p>
            <p>Technologies: React, React-Router, CSS-animation, React-Bootstrap, Github API</p>
            <button className="button-theme"><img src="../assets/github.svg" className="github-logo"/>GitHub</button>
            <button className="button-theme">Live</button>
          </div>

          <div className="project-information">
            <p>Created this website to market my myself and showcase my skills. I will use this to track of my progress in my careers.
              This my first React projects.</p>
            <p>Challenges: Since, this is a portfolio. I placed heavy emphasis on design. The most difficult part was trying to deal with
            animations and responsiveness. Still working in progress...</p>
            <p>Technologies: React, React-Router, CSS-animation, React-Bootstrap, Github API</p>
            <button className="button-theme"><img src="../assets/github.svg" className="github-logo"/>GitHub</button>
            <button className="button-theme">Live</button>
          </div>

          <div>
            <h3>MyRecipe</h3>
            <img className="project-screenshot" src="../assets/images/projects/food-project-screenshot.png" />
          </div>

          <div>
            <h3>MyRecipe</h3>
            <img className="project-screenshot" src="../assets/images/projects/food-project-screenshot.png" />
          </div>

          <div className="project-information">
            <p>Created this website to market my myself and showcase my skills. I will use this to track of my progress in my careers.
              This my first React projects.</p>
            <p>Challenges: Since, this is a portfolio. I placed heavy emphasis on design. The most difficult part was trying to deal with
            animations and responsiveness. Still working in progress...</p>
            <p>Technologies: React, React-Router, CSS-animation, React-Bootstrap, Github API</p>
            <button className="button-theme"><img src="../assets/github.svg" className="github-logo"/>GitHub</button>
            <button className="button-theme">Live</button>
          </div>

          <div className="project-information">
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
