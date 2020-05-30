import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
const partha = require('../../assets/partha.png');
const vaibhavPatle = require('../../assets/vaibhavPatle.png');
const abhilashGautam = require('../../assets/abhilashGautam.png');

class Testimonial extends Component {
    render() {
        const settings = {
      dots: false,
      infinite: true,
      slidesToShow:1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear"
      };
        return (
            <div>
             <h2 className="text-center">Testimonials</h2>
             <div className="container">
             <Slider {...settings}>
                <div className="row">
                <div className="col-xs-3 text-center">
                <img src={partha} style={{height:"50px",width:"50px"}} />
                </div>
                <div className="col-xs-9 text-center">
                 <p>I had the pleasure of interacting with the Housewise team when all established "local" agents were found to be turning up with not so desirable tenants. Loved their proactiveness and attention to details. Did I say they were much cheaper than the agents - and professional too!! Wish You all the best.</p> 
                </div>
                </div>

                <div className="row">
                <div className="col-xs-3 text-center">
                <img src={vaibhavPatle} style={{height:"50px",width:"50px"}} />
                </div>
                <div className="col-xs-9 text-center">
                 <p>I have nothing but positive experience with Housewise. I bought an investment property (an apartment) in Pune and contacted Housewise for the property management. They also took care of all rent related legal paperwork. The property is still under Housewise care and I have real peace of mind about my property. I highly recommend Housewise to anyone who wants to take good care of their investment property.</p> 
                </div>
                </div>

                <div className="row">
                <div className="col-xs-3 text-center">
                <img src={abhilashGautam} style={{height:"50px",width:"50px"}} />
                 </div>
                <div className="col-xs-9 text-center">
                 <p>I had a new flat ready to be rented out & I was struggling with the efforts involved in finding tenants. Housewise offered a solution to both these problems and as a result, I had my flat rented in no time. I am happy to recommend Housewise.</p> 
                </div>
                 </div>
            </Slider>
            </div>
            </div>
        );
    }
}
export default Testimonial;