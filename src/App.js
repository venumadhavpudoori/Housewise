import React from 'react';
import Home from "./components/HomePage/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 
import BootstrapNavbar from "./components/Navbar/Navbar" ;
import Footer from "./components/Footer/Footer";

function App() {
  return (<>
  <Router>
  <BootstrapNavbar />
         <Switch>  
    <Route exact path="/" component={Home} />
    {/* <Route exact path="/rooms/:slug" component={SingleRoom} />
    <Route exact path="/" component={Home} />
    <Route  component={Error} />  */} */}
       </Switch>
      <Footer /> 
  </Router>
  </>) ;
}

export default App;
