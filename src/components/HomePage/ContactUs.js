import React, { Component } from 'react';
import './ContactUs.css';

class ContactUs extends Component {
    render() {
        return (
            <div>
        <section id="contact">      
                <div className="container">
        <div className="row" style={{ margin:"70px 0" }}>
         <div className="col-lg-12">
          <div style={{fontFamily:" 'Varela Round',sans-serif",fontSize:"30px",fontWeigth:"500",color:"#000000",textAlign:"center"}}>Contact Us</div>
          </div>
         </div>
          <div className="row"> 
          <div className="col-md-6 col-lg-6 col-sm-12">
                <div style={{fontFamily:" 'Varela Round',sans-serif",fontSize:"22px",fontWeigth:"500",color:"#000000"}}>Find Us There</div><br/>
                <div>
                    <ul className="contacts-link">
                      <li><p><i className="fa fa-phone"></i> Phone : </p>
                          <span>+91-8448440693</span>
                      </li>
                      <li><p><i className="fa fa-envelope"></i> E-Mail : </p>
                           <span><a href="mailto:sales@housewise.in">sales@housewise.in</a></span>
                      </li>
                      <li><p><i className="fa fa-map-marker"></i> Location : </p>
                          <span> Pune | Bengaluru | Hyderabad | Gurugram | Noida | Chennai | Delhi | Mumbai </span>
                      </li>
                    </ul>
                </div>
            </div>         
            <div className="col-md-6 col-lg-6 col-sm-12">
                <div style={{fontFamily:" 'Varela Round',sans-serif",fontSize:"22px",fontWeigth:"500",color:"#000000"}}>Contact Form</div><br/>
                <form id="contactForm">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name" />
                        <div className="help-block with-errors"></div>
                      </div>                                 
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" placeholder="Select an Option" id="msg_subject" className="form-control" required data-error="Please enter your subject" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                     <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" placeholder="Mobile Number" id="email" className="form-control" name="email" required data-error="Please enter your email" />
                        <div className="help-block with-errors"></div>
                      </div>
                      </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="text" placeholder="Email" id="email" className="form-control" name="email" required data-error="Please enter your email" />
                        <div className="help-block with-errors"></div>
                      </div> 
                    </div>
                     <div className="col-md-12">
                      <div className="form-group">
                        <input type="text" placeholder="Subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group"> 
                        <textarea className="form-control" id="message" placeholder="Message" rows="5" data-error="Write your message" required></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="submit-button">
                        <button className="btn btn-success" id="submit" type="submit">Submit Message</button>
                        <div id="msgSubmit" className="h3 text-center hidden"></div> 
                        <div className="clearfix"></div> 
                      </div>
                    </div>
                  </div>            
                </form>
            </div>
          </div>
        </div>
    </section>
            </div>
        );
    }
}

export default ContactUs;