import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

class HowItWork extends Component {
    render() {
        return (
            <>
           <section id="services">
      <div className="container">
      <div className="row" style={{ margin:"90px 0" }}>
        <div className="col-lg-12">
          <div className="section-heading">How It Works?</div>
        </div>
      </div>
      <div className="row text-center" style={{ marginBottom:"120px" }}>
        <div className="col-lg-4">
          <span>
            <i className="fa fa-mobile fa-3x"></i>
          </span>
          <h4 className="service-heading">Step 1</h4>
          <p className="text-left">House owner contacts HouseWise representative and authorizes him/her to rent out the property(flat/bunglow) on the house owner's behalf</p>
        
        </div>
        <div className="col-lg-4">
          <span>
            <i className="fa fa-key fa-3x"></i>
          </span>
          <h4 className="service-heading">Step 2</h4>
          <p className="text-left">House owner hands over keys and relevant property documents to the HouseWise representative</p>
        </div>
        <div className="col-lg-4">
          <span>
            <i className="fa fa-user fa-3x"></i>
          </span>
          <h4 className="service-heading">Step 3 </h4>
          <p className="text-left">HouseWise hunts for tenants, the ones working with marquee companies and looking out for a house on rent.</p>
        </div>
      </div> 
      <div className="row text-center" >
        <div className="col-lg-4">
          <span>
            <i className="fa fa-check-square fa-3x"></i>
          </span>
          <h4 className="service-heading">Step 4</h4>
          <p className="text-left">On finalizing the tenant, HouseWise does the following;<br/>
           a) Police verification of the prospective tenant<br/>
           b) Ask for proof of employment (HR letter) from the prospective tenant</p>       
        </div>
        <div className="col-lg-4">
          <span>
            <i className="fa fa-users fa-3x"></i>
          </span>
          <h4 className="service-heading">Step 5</h4>
          <p className="text-left">House owner hands over keys and relevant property documents to the HouseWise representative</p>
        </div>
        <div className="col-lg-4">
          <span>
            <i className="fa fa-usd fa-3x"></i>
          </span>
          <h4 className="service-heading">Step 6</h4>
          <p className="text-left">HouseWise hunts for tenants, the ones working with marquee companies and looking out for a house on rent.</p>
        </div>
      </div> 
      </div>
     </section>              
            </>
        );
    }
}

export default HowItWork;