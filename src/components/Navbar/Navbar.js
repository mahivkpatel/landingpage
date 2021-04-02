import React from "react";
import { Nav, Button , Navbar , NavDropdown} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./Navbar.scss";

function TopNav() {
  //https://api.freelogodesign.org/files/f5e78e0b5f404fc0a31a90226bb63eba/thumb/logo_200x200.png?v=637522537290000000
    return (
     <div className="navbar">
       <Navbar collapseOnSelect expand="lg" fixed="top" className="nav-backgroud" >
          <Navbar.Brand href="/">Learn JavaScript</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="justify-content-end ">
    <Nav>
      <Link  className="nav-link"  to="/">Home</Link>
      <Link  className="nav-link"  to="/about">About</Link>
    </Nav>
      <NavDropdown title="Resources" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#learningpaths">Learning Paths</NavDropdown.Item>
        <NavDropdown.Item href="#webinarss">Webinarss</NavDropdown.Item>
        <NavDropdown.Item href="#javaScriptguide">JavaScript Guide</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#codecademy">Codecademy</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    </Navbar.Collapse>
      </Navbar>
     </div>
    );
}

export default TopNav;