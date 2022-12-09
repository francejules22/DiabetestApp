import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/NavBar/NavBar';
import HeroSection from '../components/HomeSection/Hero';
import AboutSection from '../components/AboutSection/About';
import ProcessSection from '../components/ProcessSection/Process';
import TipSection from '../components/Tips/Tips';
import TestSection from '../components/TestSection/Test';
import Footer from '../components/Footer/Footer';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <AboutSection />
            <ProcessSection />
            <TestSection />
            <TipSection />
            <Footer />
        </>
    );
}
export default Home;
