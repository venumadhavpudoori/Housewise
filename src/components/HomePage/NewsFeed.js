import React, { Component } from 'react';
import './NewsFeed.css';

const newsFeed1 = require('../../assets/newsFeed1.png');
const newsFeed2 = require('../../assets/newsFeed2.png');
const newsFeed3 = require('../../assets/newsFeed3.png');
const newsFeed4 = require('../../assets/newsFeed4.png');

class NewsFeed extends Component {
    render() {
        return (
            <div>
     <section>
    <div className="container">
      <div className="row" style={{ margin:"70px 0" }}>
        <div className="col-lg-12">
          <div className="newsfeed-heading">News Feed</div>
        </div>
      </div>
      <div className="row" style={{ marginBottom:"120px" }}>
        <div className="col-lg-3 column-section">

          <img src={newsFeed1} alt="newsFeed1" style={{display:"block", margin:"auto"}}/><br />
          <p><a href="#">‘HouseWise’ - Title Sponsor for Tact-4-Ops Quiz at ‘Symbiosis Centre for Management and Human Resource Development’</a></p>
          <p><i className="fa fa-calendar"></i> jan 31,2019 &nbsp;&nbsp;<i className="fa fa-user"></i> admin</p>
          <hr className="line" /><br />
          <p> We at ‘HouseWise’, are pleased to be the title sponsor for Tact-4-Ops quiz competition organised by the Symbiosis Centre for Management and Human Resource Development</p>
          <p><a href="#" className="readmore-link">Read More <i className="fa fa-chevron-right"></i></a></p>
        
        </div>
        <div className="col-lg-3 column-section">

          <img src={newsFeed2} alt="newsFeed2" style={{display:"block", margin:"auto"}}/><br />
          <p><a href="#">Property management startup Housewise selected for the exclusive “Google Digital Accelerator Programme”</a></p>
          <p><i className="fa fa-calendar"></i> Sep 20,2019 &nbsp;&nbsp;<i className="fa fa-user"></i> admin</p>
          <hr className="line" /><br />
          <p> Pune-based Housewise.in, a company providing end-to-end property management services to owners staying away from their property, has been accepted by</p>
          <p><a href="#" className="readmore-link">Read More <i className="fa fa-chevron-right"></i></a></p>
       
        </div>
        <div className="col-lg-3 column-section">

          <img src={newsFeed3} alt="newsFeed3" style={{display:"block", margin:"auto"}}/><br />
          <p><a href="#">Housewise Offers House Owners the Option to Check the Tenant’s Credit History</a></p>
          <p><i className="fa fa-calendar"></i> Oct 20,2019 &nbsp;&nbsp;<i className="fa fa-user"></i> admin</p>
          <hr className="line" /><br />
          <p> Credit History of a person indicates creditworthiness and gives a sense of financial habits of an individual. Housewise.in is now bringing this idea to the real estate rental market </p>
          <p><a href="#" className="readmore-link">Read More <i className="fa fa-chevron-right"></i></a></p>
        
        </div>
        <div className="col-lg-3 column-section">

          <img src={newsFeed4} alt="newsFeed4" style={{display:"block", margin:"auto"}}/><br />
          <p><a href="#">Housewise is delighted to announce tie up with Joseph Institute of Management, Tiruchirappalli</a></p>
          <p><i className="fa fa-calendar"></i> Dec 15,2019 &nbsp;&nbsp;<i className="fa fa-user"></i> admin</p>
          <hr className="line" /><br />
          <p> Under this MoU, Housewise and <span style={{color:"#8CC63F"}}>JIM</span> will collaborate, share information and technology to develop the required skills and intend to create a centre of </p>
          <p><a href="#" className="readmore-link">Read More <i className="fa fa-chevron-right"></i></a></p>
        
        </div>
      </div>
    </div>
  </section>
            </div>
        );
    }
}

export default NewsFeed;