import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import {  withRouter } from "react-router-dom";
import { Nav, Navbar ,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./Routes";
import './App.css';
import { BsBoxArrowInRight } from "react-icons/bs";
const imgone = require('./assets/logohw.png');

function App(props) {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);

    props.history.push("/login");
  }

  return (
  
  !isAuthenticating && (
  <div className="wrapper">
                            <div  id="color-nav">
                            <Navbar fixed="top-1"  expand="lg">
                                <Navbar.Brand href="#">
                                <img src={imgone} alt="logo"  className="logo" style={{ margin:"0 40px" }}/></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="#home"  id="basic-nav" style={{ backgroundColor:"#8DC63E" ,color:"#ffffff" }}>Home</Nav.Link>
                                    <Nav.Link href="#services"  id="basic-nav" >Services</Nav.Link>
                                    <Nav.Link href="#HowItWorks"  id="basic-nav" >How It Work</Nav.Link>
                                    <Nav.Link href="#aboutUs"  id="basic-nav" >About us</Nav.Link>
                                    <Nav.Link href="#team"  id="basic-nav" >Team</Nav.Link>
                                    <Nav.Link href="#contactUs"  id="basic-nav" >Contact us</Nav.Link>
                                     </Nav>
                                     <Nav>
                                     {isAuthenticated ? (
                                    <Nav.Link  className="login-link" onClick={handleLogout}><h6><BsBoxArrowInRight /> Log Out </h6></Nav.Link>
                                       ) : (
                                    <Nav.Link  className="login-link" onClick={() => props.history.push('/login')}><h6><BsBoxArrowInRight /> Log In / Register </h6></Nav.Link>
                                     )}
                                     </Nav>
                                     <Button  className="button" onClick={() => props.history.push('/login')}>Submit Property</Button>
                                    </Navbar.Collapse>
                            </Navbar>
                            <Navbar fixed="top-2"  expand="lg">
                                    <Nav className="ml-auto">
                                     <ul className="contact-links">
                                         <li><Nav.Link href={"tel:+91-8448440693" }>Whatsapp/Call: +91-8448440693</Nav.Link></li>
                                         <li><Nav.Link href={"mailto:"} >E-Mail: sales@housewise.in</Nav.Link></li>
                                      </ul>
                                    </Nav>
                            </Navbar>
                            <Routes appProps={{ isAuthenticated, userHasAuthenticated }} /> 
                            </div>
              </div>
  
  )
  ) ;
}

export default withRouter(App);
