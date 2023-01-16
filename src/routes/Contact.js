import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImageProject from "../components/HeroImageProject";

const Contact=()=>{
    return(
        <div>
            <Navbar/>
            <HeroImageProject heading="Contact" text="We can catch up" />
            <Footer/>
        </div>
    )
}
export default Contact;