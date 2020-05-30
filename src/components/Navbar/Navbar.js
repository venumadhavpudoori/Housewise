import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav, Button } from 'react-bootstrap'
  
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import { BsBoxArrowInRight } from "react-icons/bs";
const imgone = require('../../assets/logohw.png');


class BootstrapNavbar extends React.Component{
     constructor(props) {
    super(props);
    this.state = {
    };
  }

    render(){
        return(
            <>
              <div className="wrapper">
                            <div  id="color-nav">
                            <Navbar fixed="top-1">
                                <Navbar.Brand href="#">
                                <img src={imgone} alt="logo"  className="logo" style={{ margin:"0 40px" }}/></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="#"  id="basic-nav" style={{ backgroundColor:"#8DC63E" ,color:"#ffffff" }}>Home</Nav.Link>
                                    <Nav.Link href="#"  id="basic-nav" >Services</Nav.Link>
                                    <Nav.Link href="#"  id="basic-nav" >How It Work</Nav.Link>
                                    <Nav.Link href="#"  id="basic-nav" >About us</Nav.Link>
                                    <Nav.Link href="#"  id="basic-nav" >Team</Nav.Link>
                                    <Nav.Link href="#"  id="basic-nav" >Contact us</Nav.Link>
                                     </Nav>
                                    <Nav.Link href="#" className="login-link"><h6><BsBoxArrowInRight /> Log In / Register </h6></Nav.Link>
                                    <Button className="button">Submit Property</Button>
                               </Navbar.Collapse>
                            </Navbar>
                            <Navbar fixed="top-2">
                                    <Nav className="ml-auto">
                                     <ul className="contact-links">
                                         <li><Nav.Link href={"tel:+91-8448440693" }>Whatsapp/Call: +91-8448440693</Nav.Link></li>
                                         <li><Nav.Link href={"mailto:" + this.props.email} >E-Mail: sales@housewise.in</Nav.Link></li>
                                      </ul>
                                    </Nav>
                            </Navbar>
                            </div>
              </div>          
            </> 
        )  
    }
}

export default BootstrapNavbar;