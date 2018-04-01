import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './my-navbar.css';

export default class MyNavbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Navbar default collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <NavItem eventKey={0} className="nav-name" componentClass={Link} href="/" to="/">
                Thep's Portfolio
              </NavItem>
            </Navbar.Brand>
          </Navbar.Header>

           <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav className="nav-item">
              <NavItem eventKey={1} href="https://github.com/Thepnathi" target="_blank">
                <Image src="../assets/github.svg" className="github-logo"/>
                Github
              </NavItem>
              <NavItem eventKey={2} componentClass={Link} href="/about-me" to="/about-me">
                About Me
              </NavItem>
              <NavItem eventKey={3} componentClass={Link} href="/projects" to="/projects">
                Projects
              </NavItem>
              <NavItem eventKey={4} href="#">
                Blogs
              </NavItem>
              <NavItem eventKey={5} href="#">
                Contact
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
