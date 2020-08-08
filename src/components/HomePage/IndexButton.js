import React, { Component }  from "react";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

export default class IndexButton extends Component {
  render() {
    return (
      <div>
        <ScrollUpButton 
              style={{background:"#8CC63F" , fontWeight:"400" ,height:"50px" ,width:"45px"}}
              />
      </div>
    );
  }
}