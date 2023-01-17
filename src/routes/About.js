import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImageProject from "../components/HeroImageProject";
import AboutContent from "../components/AboutContent";

const About=()=>{
    return(
        <div>
            <Navbar/>
            <HeroImageProject heading="About Me." text="Get to know me"/>
            <AboutContent/>
            <Footer/>
            
        </div>
    )
}
export default About;