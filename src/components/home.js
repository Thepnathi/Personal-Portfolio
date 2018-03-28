import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.css';
import './about-me.css'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="top">
          <h1 className="animated-title">Welcome Back.</h1>
            <div className="introduction">
                  <p className="intro-parts">Self-taught full-stack developer with experience in other software fields. Arms with the tools to bring ideas to life.</p>
                  <p className="intro-parts">Computer Science student with creativity and problem solving skills.</p>
                  <p className="intro-parts">Every projects built by me has a real life purpose. Want to hear a joke? Click here.</p>
                  <p className="intro-parts">Have an interesting idea to change the world? Or want to create something fun?
                    <a componentClass={Link} href="/contacts" to="/contact">Get in touch.</a></p>
                    <Image className="intro-parts" className="profile-image" src="../assets/profile-pic.png"  href="somepage"/>
            </div>
        </div>

        <h2>About Me Section</h2>

        <div className="about-me">
          <div className="experience">
            <h2>Experiences</h2>
              <p>Experiences goes here</p>
          </div>

          <div className="skills">
            <h2>Technologies and Skills</h2>
            
          </div>

        </div>

        <div className="footer">
          <Image className="icons" src="../assets/linkedin.svg" href="/" />
          <Image className="icons" src="../assets/linkedin.svg" href="/" />
        </div>


    </div>

    )
  }
}
