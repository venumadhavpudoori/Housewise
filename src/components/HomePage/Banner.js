import React, { Component } from 'react';
import './Banner.css';
import { FaPhoneSquareAlt } from "react-icons/fa";

class Banner extends Component {
    render() {
        return (
        <header className="masthead">
           <div className="container">
            <div className="intro-text">
                <div className="intro-lead-in"> HESITANT ABOUT RENTING </div>
                <div className="intro-lead-out"> YOUR PROPERTY IN INDIA? </div>
                <div className="intro-heading"><span style={{color:"#8dc63f" ,fontSize:"22px" ,fontWeight:"700",marginBottom:"25px"}}> HouseWise</span> is the solution to all your worries. Call<span className="intro-contact">   <FaPhoneSquareAlt /> +91-8448440693-Now </span></div>
                <button type="button"class="btn btn-success" href="#">SIGN UP</button>
                <button type="button"class="btn btn-success" href="#">LOGIN</button><br/><br/>
                <p className="intro-places">Pune | Bengaluru | Hyderabad | Gurugram | Noida | Chennai | Delhi | Mumbai </p>
            </div>
            </div> 
        </header>
        );
    }
}

export default Banner;