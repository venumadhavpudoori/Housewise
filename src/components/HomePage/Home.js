import React, { Component } from 'react';
import Banner from './Banner';
import Services from './Services';
import HowItWork from './HowItWork';
import Directorates from './Directorates';
import Testimonial from './Testimonial';
import NewsFeed from './NewsFeed';
import ContactUs from './ContactUs';
import WhyHousewise from './WhyHousewise';
import IndexButton from './IndexButton';
import Counter from './Counter';
import Footer from '../Footer/Footer';






class Home extends Component {
    render() {
        return (
            <div>
             <Banner /> 
             <Services /> 
             <Counter />
             <HowItWork /> 
             <Directorates />
             <Testimonial />
             <NewsFeed />
             <ContactUs />
             <IndexButton />
             <WhyHousewise />
             <Footer />
            </div>
        );
    }
}

export default Home;