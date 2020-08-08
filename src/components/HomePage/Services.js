import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Services.css';

class Services extends Component {
    render() {
        return (
            <>
            <section id="services">
    <div className="container">
      <div className="row" style={{ margin:"70px 0" }}>
        <div className="col-lg-12">
          <div className="section-heading">Services</div>
        </div>
      </div>
      <div className="row text-center" style={{ marginBottom:"120px" }}>
        <div className="col-lg-3" id="column-effect">
          <span>
            <i className="fa fa-building fa-3x"></i>
          </span>
          <h4 className="service-heading">Rental<br/>Management</h4>
          <ul className="text-left">
          <li>Photography.</li>
          <li>Police verification.</li>
          <li>Complete society formality.</li>
          <li>Facilitate move-in/out.</li>
          </ul>
          <p><a href="#" className="readmore-link">Read More <i className="fa fa-chevron-right"></i></a></p>

        </div>
        <div className="col-lg-3" id="column-effect">
          <span>
            <i className="fa fa-briefcase fa-3x"></i>
          </span>
          <h4 className="service-heading">End-To-End<br/> Services</h4>
          <ul className="text-left">
          <li>Ensure rent collection.</li>
          <li>Periodic visit to property.</li>
          <li>Payment to statutory authorities.</li>
          <li>Resolve dispute, if any.</li>
          </ul>
           <p><a href="#" className="readmore-link">Read More <i className="fa fa-chevron-right"></i></a></p>

        </div>
        <div className="col-lg-3" id="column-effect">
          <span>
            <i className="fa fa-home fa-3x"></i>
          </span>
          <h4 className="service-heading">Property Management </h4>
          <ul className="text-left">
          <li>Monitoring plots / empty houses.</li>
          <li>Rental management of residential properties.</li>
          <li>Repair and Maintenance.</li>
          </ul>
           <p><a href="#" className="readmore-link">Read More <i className="fa fa-chevron-right"></i></a></p>

        </div>
        <div className="col-lg-3" id="column-effect">
          <span>
            <i className="fa fa-file fa-3x"></i>
          </span>
          <h4 className="service-heading">Online Rent Agreement</h4>
          <ul className="text-left">
          <li>Truely online.</li>
          <li>Online stamp paper.</li>
          <li>Online drafting.</li>
          <li>e-Signature.</li>
          </ul>
           <p><a href="#" className="readmore-link">Read More <i className="fa fa-chevron-right"></i></a></p>

        </div>
      </div>
    </div>
    <div>
  
    </div>
  </section>              
            </>
        );
    }
}

export default Services;