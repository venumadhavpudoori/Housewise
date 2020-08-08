import React from "react";
import Home from "./components/HomePage/Home";
import LogIn from "./components/HomePage/LogIn";

import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";

import { Route,Router,Switch } from 'react-router-dom';


export default function Routes({ appProps }) {
    return (
       <Switch>
          <UnauthenticatedRoute  path="/login" exact component={LogIn} appProps={appProps} />
          <AuthenticatedRoute  path="/"  exact component={Home} appProps={appProps} />
      </Switch>
    );
  }
