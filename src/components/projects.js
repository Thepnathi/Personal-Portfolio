import React, { Component } from 'react';
import './projects.css';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Project History</h2>
        <div>Multos eiusmod deserunt, anim quamquam praesentibus, nostrud nisi an ingeniis
          distinguantur, ne constias ut occaecat. An te sempiternum nam esse sempiternum
          occaecat irure proident. Ut legam distinguantur nam o tamen quibusdam
          consectetur ab irure proident iis quibusdam, arbitror duis ad voluptate
          sempiternum.Ita nostrud imitarentur. Se deserunt graviterque se an fugiat
          instituendarum. An ne despicationes.</div>
        <div className="project-wrapper">

          <div>
            <h3>Portfolio</h3>
            <img className="project-screenshot" src="../assets/images/projects/portfolio-project-screenshot.png" />
          </div>

          <div>
            <h3>Thep's Blog</h3>
            <img className="project-screenshot" src="../assets/images/projects/portfolio-project-screenshot.png" />
          </div>

          <div>
            <h3>MyRecipe</h3>
            <img className="project-screenshot" src="../assets/images/projects/portfolio-project-screenshot.png" />
          </div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    );
  }
}
