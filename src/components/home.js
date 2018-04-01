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
            <div className="box2"><img className="intro-parts" className="profile-image" src="../assets/profile-pic.png"  href="somepage"/>Quid deserunt praesentibus in voluptate nulla a officia philosophari ne senserit
            si nulla ex aliqua se cernantur ex sunt. Laboris transferrem in nostrud, an non
            exquisitaque. Probant duis constias iudicem est sint nescius graviterque.Nam
            enim fugiat iis officia. Nostrud sint ubi pariatur efflorescere si laboris
            cillum mentitum. Voluptate nulla incididunt, e export litteris singulis, sed ad
            transferrem, de anim nulla in arbitror. Tamen mandaremus hic quid sint, ab
            senserit ubi laboris, an malis constias ad si labore singulis illustriora ne
            velit arbitror non probant, esse e appellat, e veniam cernantur singulis se de
            aliquip non expetendis.</div>
            <div className="box3"><p className="intro-parts">Self-taught full-stack developer
               with experience in other software fields.</p></div>
            <div className="box4"><p className="intro-parts">Computer Science student with creativity and problem solving skills.</p></div>
            <div className="box5"><p className="intro-parts">Every projects built by me has a real life purpose. Want to hear a joke? Click here.</p></div>
            <div className="box6"><p className="intro-parts">Have an idea to change the world? Or want to create something fun?
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
