import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './HowItWork.css';

class HowItWork extends Component {
    render() {
        return (
            <>
           <section id="HowItWorks">
      <div className="container">
      <div className="row" style={{ margin:"60px 0" }}>
        <div className="col-lg-12">
          <div className="howItWorks-heading">How It Works?</div>
        </div>
      </div>
      <div className="row text-center" style={{ marginBottom:"20px" }}>
        <div className="col-lg-4" id="column-effects">
          <span>
            <i className="fa fa-mobile fa-3x"></i>
          </span>
          <h4 className="steps">Step 1</h4>
          <p className="text">House owner contacts HouseWise representative and authorizes him/her to rent out the property(flat/bunglow) on the house owner's behalf</p>
        
        </div>
        <div className="col-lg-4" id="column-effects">
          <span>
            <i className="fa fa-key fa-3x"></i>
          </span>
          <h4 className="steps">Step 2</h4>
          <p className="text">House owner hands over keys and relevant property documents to the HouseWise representative</p>
        </div>
        <div className="col-lg-4" id="column-effects">
          <span>
            <i className="fa fa-user fa-3x"></i>
          </span>
          <h4 className="steps">Step 3 </h4>
          <p className="text">HouseWise hunts for tenants, the ones working with marquee companies and looking out for a house on rent.</p>
        </div>
      </div> 
      <div className="row text-center" >
        <div className="col-lg-4" id="column-effects">
          <span>
            <i className="fa fa-check-square fa-3x"></i>
          </span>
          <h4 className="steps">Step 4</h4>
          <p className="text">On finalizing the tenant, HouseWise does the following;<br/>
           a) Police verification of the prospective tenant<br/>
           b) Ask for proof of employment (HR letter) from the prospective tenant</p>       
        </div>
        <div className="col-lg-4" id="column-effects">
          <span>
            <i className="fa fa-users fa-3x"></i>
          </span>
          <h4 className="steps">Step 5</h4>
          <p className="text">After successful verification of the prospective tenant, HouseWise prepare the contract to be signed by both parties - house owner and the tenant. House owner can pre-authorize HouseWise representative to sign on the owner's behalf.</p>
        </div>
        <div className="col-lg-4" id="column-effects">
          <span>
            <i className="fa fa-usd fa-3x"></i>
          </span>
          <h4 className="steps">Step 6</h4>
          <p className="text">a) Tenant transfers monthly rent to house owner's account.<br/>
          b) HouseWise continues to maintain property till end of the lease.</p>
        </div>
      </div> 
      </div>
     </section>              
            </>
        );
    }
}

export default HowItWork;