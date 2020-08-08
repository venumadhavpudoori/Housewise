import React, { Component } from 'react';
import './Directorates.css';

const founder = require('../../assets/founder.png');
const advisory = require('../../assets/advisory.png');


class Directorates extends Component {
    render() {
        return (
            <>
            <section id="team" style={{ backgroundColor:"#F7F7F7",padding:"20px 0" }}>
              <div className="container">
                <div className="row" style={{ margin:"70px 0" }}>
                <div className="col-lg-12">
                <div className="team-heading">Founder</div>
                </div>
                </div>
                <div className="row"  id="founder" >
                <div className="col-lg-3">
                <figure>
                <img src={founder} style={{ textAlign:"center" }} />
                <figcaption>Pryank Agrawal</figcaption>
                <figcaption>IIT Roorkee</figcaption>
                </figure>
                </div>
                <div className="col-lg-9">
                <p className="team-text"> Pryank Agrawal is a IIT Roorkee Graduate. He has held leadership positions in large marquee names in IT and Banking industry for almost a decade and half and has lived in various cities in India, US and Middle East. His fascination with new cities and love for real estate investments led him to buy property in various cities in across India. The idea of Housewise came to fruition when he could not find a single trustworthy property management company in India.</p>
                </div>
                </div>
                <div className="row" style={{ margin:"30px 0" }}>
                <div className="col-lg-12">
                <div className="team-heading">Advisory</div>
                </div>
                </div>
                <div className="row"  id="advisory" >
                <div className="col-lg-3">
                <figure>
                <img src={advisory}  style={{ textAlign:"center" }}/>
                <figcaption>Ruchir Arora</figcaption>
                <figcaption>ISB Hyderabad</figcaption>
                </figure>
                </div>
                <div className="col-lg-9">
                <p className="team-text">Ruchir is Founder and CEO of CollegeDekho.com. He is technology entrepreneur with more than 13 years of experience across internet startups, technology and media. He founded HTCampus, the first and the largest in its category, in 2010, targeting the education services and advertising market - with a portfolio of 6 websites, mobile app and a services business. He is a graduate of Indian School of Business.</p>
                </div>
                </div>
              </div>
            </section>          
            </>
        );
    }
}

export default Directorates;