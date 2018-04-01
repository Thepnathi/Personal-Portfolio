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
            <div className="box1"><h1 className="animated-title">Welcome Back.</h1></div>
            <div className="box2"><img className="intro-parts" className="profile-image" src="../assets/profile-pic.png"  href="somepage"/></div>
            <div className="box3"><p className="intro-parts">Self-taught full-stack developer
               with experience in other software fields. Arms with the tools to bring ideas to life.</p></div>
            <div className="box4"><p className="intro-parts">Computer Science student with creativity and problem solving skills.</p></div>
            <div className="box5"><p className="intro-parts">Every projects built by me has a real life purpose. Want to hear a joke? Click here.</p></div>
            <div className="box6"><p className="intro-parts">Have an interesting idea to change the world? Or want to create something fun?
              <a componentClass={Link} href="/contacts" to="/contact"> Get in touch.</a></p></div>
            <div className="box7"></div>
            <div className="box4"></div>
            <div className="box4"></div>
            <div className="box4"></div>
          </div>
    </div>
    )
  }
}
