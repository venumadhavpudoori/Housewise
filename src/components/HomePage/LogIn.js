import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaGoogle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './LogIn.css';

class LogIn extends Component {
    render() {
        return (
            <>
      <section>
      <div className="container" style={{width:"600px"}}>
      <h1 className="login-heading text-center" >Log In & Register With </h1>
      <Button  className="google-button"> <FaGoogle style={{marginTop:"-5px"}}/> Google</Button>
      <Tabs defaultActiveKey="loginform" transition={false} id="noanim-tab">
      <Tab eventKey="loginform" title="Log In">
      <p className="security-notify text-center">We have updated security for your account safety. If you are not able to login, please reset your password</p>
      <LoginForm />
      </Tab>
      <Tab eventKey="registerform" title="Register">
      <SignupForm />
      </Tab>
      </Tabs>
      </div>
      </section>
                
            </>
        );
    }
}

export default LogIn;