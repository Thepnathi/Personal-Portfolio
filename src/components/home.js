import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AboutMe from './about-me';
import MyFooter from './footer';
import Projects from './projects';
import Contacts from './contacts';
import './stylesheet/home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
          <div className="introduction">
            <div className="box1">
              <h1 className="animated-title">Welcome Back.</h1>
              <h2 className="intro-title">Self-Taught Full-Stack Developer</h2>
              <h2 className="intro-title">Computer Science Student</h2>
            </div>

            <div className="box2 short-bio">
              <img className="intro-parts" className="profile-image" src="../assets/profile-pic.png"  href="somepage"/>
              <h2>About Me</h2>
              <p>My name is Thepnathi, I am currently studying in University of Liverpool. When I am not studying
                or developing. You can find me in the gym or shooting with the University's Archery Club.</p>
                {/* NOTE: Remember to add social network logo here */}
                <div className="social-networks">
                  <div></div>
                  <div><i class="fab fa-twitter-square"></i></div>
                  <div><i class="fab fa-linkedin"></i></div>
                  <div><i class="fab fa-medium"></i></div>
                  <div><i class="fab fa-github-square"></i></div>
                  <div></div>
              </div>
            </div>

            <div className="bio-box box3 secondary-color-theme"><p className="intro-parts">Currrently working with the exciting MERN stack
               (<mark class="mongo">MongoDB</mark>,
                <mark class="express">Express</mark>,
                <mark class="react">React.js</mark> and
                <mark class="node">Node.js</mark>)</p></div>
            <div className="bio-box box4 secondary-color-theme"><p className="intro-parts">
              Computer Science student with with creativity and problem solving skills.</p></div>
            <div className="bio-box box5 secondary-color-theme"><p className="intro-parts">
              Every projects built by me has a real life purpose. <a href="#">Check out my blog</a>.</p></div>
            <div className="bio-box box6 secondary-color-theme"><p className="intro-parts">
              Have an idea to change the world? Or want to create something fun?
              <a componentClass={Link} href="/contacts" to="/contact"> Get in touch.</a></p></div>
          </div>
          <AboutMe />
          <Projects />
          <Contacts />
    </div>
    )
  }
}
