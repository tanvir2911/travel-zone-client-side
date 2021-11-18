import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Banner1 from '../Banner1/Banner1';
import Banner2 from '../Banner1/Banner2.js';
import Destinations from '../Destinations/Destinations'


const Home = () => {
    return (
        <div id="home">
            <Banner1></Banner1>
            <Destinations></Destinations>
            <Banner2></Banner2>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;