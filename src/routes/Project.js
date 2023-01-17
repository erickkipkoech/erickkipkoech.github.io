import React from "react";
import Navbar from "../components/Navbar";
import HeroImageProject from "../components/HeroImageProject";
import Footer from "../components/Footer";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";
const Project=()=>{
    return(
        <div>
            <Navbar/>
            <HeroImageProject heading="My Projects." text="These are My Projects"/>
            <Work/>
            <PricingCard/>
            <Footer/>
           
        </div>
    )
};
export default Project;