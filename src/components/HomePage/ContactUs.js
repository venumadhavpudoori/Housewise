import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './ContactUs.css';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "" ,
      isPune:false,
      isBengaluru:false,
      isHyderabad:false,
      isChennai:false,
      isGurugram:false,
      isDelhi:false,
      isNoida:false,
      isMumbai:false,
    };
  }
    render() {
        return (
        <section id="contactUs">      
        <div className="container">
        <div className="row" style={{ margin:"70px 0" }}>
         <div className="col-lg-12">
          <div  className="contact-heading">Contact Us</div>
          </div>
         </div>

          <div className="row"> 
          <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="contact-column-heading" >Find Us There</div><br/>
                
                    <div className="contacts-link">
                      <i className="fa fa-phone"></i>&nbsp;
                      <div className="contact-text">
                      <p>Phone :</p>
                      <p>+91-8448440693</p>
                          </div>
                          </div>

                    <div className="contacts-link">
                      <i className="fa fa-envelope"></i>
                      <div className="contact-text">
                      <p> E-Mail : </p>
                           <p><a href="mailto:sales@housewise.in" style={{color:"#6F9D30"}}>sales@housewise.in</a></p>
                           </div>
                           </div>

                    <div className="contacts-link">
                      <i className="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp;
                      <div className="contact-text">
                      <p> Location :</p> 
                      <p id="cites-hover"> 
                           <span onMouseOver={() => this.setState({ isPune: !this.state.isPune })}
                                 onMouseOut={() => this.setState({ isPune: false })}> Pune</span> | 
                           <span onMouseOver={() => this.setState({ isBengaluru: !this.state.isBengaluru })}
                                 onMouseOut={() => this.setState({ isBengaluru: false })}> Bengaluru</span> | 
                           <span onMouseOver={() => this.setState({ isHyderabad: !this.state.isHyderabad })}
                                 onMouseOut={() => this.setState({ isHyderabad: false })}> Hyderabad</span> | 
                           <span onMouseOver={() => this.setState({ isGurugram: !this.state.isGurugram })}
                                 onMouseOut={() => this.setState({ isGurugram: false })}> Gurugram</span> | 
                           <span onMouseOver={() => this.setState({ isNoida: !this.state.isNoida })}
                                 onMouseOut={() => this.setState({ isNoida: false })}> Noida</span> | 
                           <span onMouseOver={() => this.setState({ isChennai: !this.state.isChennai })}
                                onMouseOut={() => this.setState({ isChennai: false})}> Chennai</span> | 
                           <span onMouseOver={() => this.setState({ isDelhi: !this.state.isDelhi })}
                                 onMouseOut={() => this.setState({ isDelhi: false })}> Delhi</span> | 
                           <span onMouseOver={() => this.setState({ isMumbai: !this.state.isMumbai })}
                                 onMouseOut={() => this.setState({ isMumbai: false })}> Mumbai</span> </p>
                          </div>
                          </div> 

                          <div style={{marginLeft:"60px"}}>
                          {this.state.isPune && <div>91 Springboard Sky Loft, Creaticity Mall,Opposite Golf Course, Off, Airport Rd, Shastrinagar, Yerawada, Pune, Maharashtra 411006</div>  }
                          {this.state.isBengaluru && <div>Spacelance Office Solutions Pvt.Ltd. #39,2nd Floor,NGEF Lane, Indiranagar, Stage1 Bangalore-560038</div>  }
                          {this.state.isHyderabad && <div>Unit -D, T Square Building, 4th floor,Kavuri Hills, Madhapur,Hyderabad - 500033</div> }
                          {this.state.isGurugram  && <div>Unit No. 258, Spaze iTech Park, Sector 49, Sohna Road,Gurugram 122001</div>  }
                          {this.state.isNoida && <div>Unit No. 258, Spaze iTech Park, Sector 49, Sohna Road,Gurugram 122001</div> }
                          {this.state.isChennai && <div>715-A, 7th Floor, Spencer Plaza, Suite No.499 Mount Road, Anna Salai, Chennai - 600 002</div>  }
                          {this.state.isDelhi && <div>91 Springboard Sky Loft, Creaticity Mall, Opposite Golf Course, Off, Airport Rd, Shastrinagar, Yerawada, Pune,Maharashtra 411006</div>  }
                          {this.state.isMumbai && <div>715-A, 7th Floor, Spencer Plaza, Suite No.499 Mount Road, Anna Salai, Chennai - 600 002</div> }
                          </div>
                           <br/>
                          <ul className="connect-socialMedia" style={{marginLeft:"70px"}} >
                            <li><i className="fa fa-facebook"></i></li>
                            <li><i className="fa fa-twitter"></i></li>
                            <li><i className="fa fa-linkedin"></i></li>
                          </ul>
     
            </div>
                    
            <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="contact-column-heading">Contact Form</div><br/>
                <form id="contactForm">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name" />
                        <div className="help-block with-errors"></div>
                      </div>                                 
                    </div>

                    <div className="col-md-3">
                        <PhoneInput 
                             international
                             defaultCountry="RU"  
                             value={this.state.phone} 
                             onChange={phone => this.setState({ phone })} 
                             style={{ height:"35px" ,width:"130px" }}
                        />
                    </div>

                     <div className="col-md-9">
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

                    <Recaptcha
                        sitekey="your_site_key"
                        render="explicit"
                    />
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
        );
    }
}

export default ContactUs;