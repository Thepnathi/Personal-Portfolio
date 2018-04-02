import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyFooter from './footer';
import './home.css';

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

            <div className="box2">
              <img className="intro-parts" className="profile-image" src="../assets/profile-pic.png"  href="somepage"/>
              <h2>About Me</h2>
              <p className="short-bio">Aspiring Software developer. Persuading Computer Science Degree in University of Liverpool with a year in industry.
                (I am available for internship from summer 2019). Currently working on exciting technologies using the MERN stack (MongoDB, Express, React and Node).</p>
            </div>

            <div className="bio-box box3"><p className="intro-parts">Self-taught full-stack developer
               with experience in other software fields.</p></div>
            <div className="bio-box box4"><p className="intro-parts">Computer Science student with creativity and problem solving skills.</p></div>
            <div className="bio-box box5"><p className="intro-parts">Every projects built by me has a real life purpose. Want to hear a joke? Click here.</p></div>
            <div className="bio-box box6"><p className="intro-parts">Have an idea to change the world? Or want to create something fun?
              <a componentClass={Link} href="/contacts" to="/contact"> Get in touch.</a></p></div>
            <div className="line"></div>
            <div className="box7"></div>
            <div className="box4"></div>
            <div className="box4"></div>
            <div className="box4"></div>
          </div>
    </div>
    )
  }
}
