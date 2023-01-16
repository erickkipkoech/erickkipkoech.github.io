import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImageProject from "../components/HeroImageProject";

const About=()=>{
    return(
        <div>
            <Navbar/>
            <HeroImageProject heading="About Me." text="Get to know me"/>
            <Footer/>
        </div>
    )
}
export default About;