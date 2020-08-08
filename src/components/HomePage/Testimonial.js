import React, { Component } from 'react';
import Slider from "react-slick";
import 'font-awesome/css/font-awesome.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.css' 

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
             <div className="testimonial-heading">Testimonials</div>
             <div className="container">
             <Slider {...settings}>
                 <div>
                <div className="row" id="persons-bio">
                <div className="col-lg-3 ">
                <figure>
                <img src={partha}  /> 
                <figcaption>Partha</figcaption>
                <figcaption>London, UK</figcaption>
                </figure>
                </div>
                <div className="col-lg-9 ">
                 <p><i className="fa fa-quote-left fa-2x"></i>&nbsp;
                I had the pleasure of interacting with the Housewise team when all established "local" agents were found to be turning up with not so desirable tenants. Loved their proactiveness and attention to details. Did I say they were much cheaper than the agents - and professional too!! Wish You all the best.
                <i className="fa fa-quote-right fa-2x"></i>&nbsp;</p>
                </div>
                </div>
                </div>

                <div>
                <div className="row" id="persons-bio">
                <div className="col-lg-3 ">
                <figure>
                <img src={vaibhavPatle}  />       
                <figcaption>Vaibhav Patle</figcaption>
                <figcaption>Princeton New Jersey, USA</figcaption>
                </figure>
                </div>
                <div className="col-lg-9 ">
                 <p><i className="fa fa-quote-left fa-2x"></i>&nbsp;
                 I have nothing but positive experience with Housewise. I bought an investment property (an apartment) in Pune and contacted Housewise for the property management. They also took care of all rent related legal paperwork. The property is still under Housewise care and I have real peace of mind about my property. I highly recommend Housewise to anyone who wants to take good care of their investment property.
                 <i className="fa fa-quote-right fa-2x"></i>&nbsp;</p>
                </div>
                </div>
                </div>

                <div>
                <div className="row" id="persons-bio">
                <div className="col-lg-3 ">
                <figure>
                <img src={abhilashGautam}  />
                <figcaption>Abhilash Gautam</figcaption>
                <figcaption>Sydney, Australia</figcaption>
                </figure>
                 </div>
                <div className="col-lg-9 ">
                 <p><i className="fa fa-quote-left fa-2x"></i>&nbsp;
                I had a new flat ready to be rented out & I was struggling with the efforts involved in finding tenants. Housewise offered a solution to both these problems and as a result, I had my flat rented in no time. I am happy to recommend Housewise.
                <i className="fa fa-quote-right fa-2x"></i>&nbsp;</p> 
                 </div>
                 </div>
                 </div>
                 
            </Slider>
            </div>
            </div>
        );
    }
}
export default Testimonial;