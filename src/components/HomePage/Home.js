import React, { Component } from 'react';
import Banner from './Banner';
import Services from './Services';
import HowItWork from './HowItWork';
import Directorates from './Directorates';
import Testimonial from './Testimonial';
import NewsFeed from './NewsFeed';
import ContactUs from './ContactUs';
import WhyHousewise from './WhyHousewise';






class Home extends Component {
    render() {
        return (
            <div>
             <Banner /> 
             <Services /> 
             <HowItWork /> 
             <Directorates />
             <Testimonial />
             <NewsFeed />
             <ContactUs />
             <WhyHousewise />
            </div>
        );
    }
}

export default Home;