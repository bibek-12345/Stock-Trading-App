import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Brokerage from './Brokerage';
import Footer from '../Footer';

function Pricing() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <OpenAccount/>
            <Brokerage/>
            <Footer/>
        </>
     );
}

export default Pricing;