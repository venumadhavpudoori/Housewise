import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import CountUp from 'react-countup';
import './Counter.css'; 

class Counter extends Component {
    render() {
        return (
            <>
        <section className="counter-section">
     
        <div className="row">
        <div className="col-lg-1"></div>
          <div className="col-lg-2">
            <div className="counter text-center">
              <div className="icon"><i class="fa fa-building-o"></i></div>
              <div className="counterUp"><CountUp end={710} duration={5} /></div>
              <p>Properties</p>
            </div>      
          </div>
          
          <div className="col-lg-2">
            <div className="counter text-center">
              <div className="icon"><i class="fa fa-map-marker"></i></div>
              <div className="counterUp"><CountUp end={852000} duration={5}/></div>
              <p>Square-Feet</p>
            </div>      
          </div>
          
          <div className="col-lg-2">
            <div className="counter text-center">
              <div className="icon"><i class="fa fa-user-plus"></i></div>
              <div className="counterUp"><CountUp end={3200} duration={5}/></div>
              <p>Happy Clients</p>
            </div>       
          </div>
          
          <div className="col-lg-2">
            <div className="counter text-center">
              <div className="icon"><i class="fa fa-industry"></i></div>
              <div className="counterUp"><CountUp end={8} duration={5}/></div>
              <p>Cities Covered</p>
            </div>           
          </div>

          <div className="col-lg-2">
            <div className="counter text-center">
              <div className="icon"><i class="fa fa-flag-checkered"></i></div>
              <div className="counterUp"><CountUp end={21} duration={5}/></div>
              <p>Countries</p>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      
    </section>
            </>
        );
    }
}

export default Counter;