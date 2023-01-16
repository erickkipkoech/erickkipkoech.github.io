import "./HeroImageStyles.css";

import React from "react";
import p4 from "../assets/p4.jpg";
import { Link } from "react-router-dom";
const HeroImage=()=>{
    return(
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={p4} alt="p4"/>
                </div>
                <div className="content">
                    <p>Hi,</p>
                    <h1>Web Developer Here.</h1>
                    <div>
                    <Link to="/project" className="btn">projects</Link>
                    <Link to="/contact" className="btn btn-light">contact</Link>
                    </div>
                    
                </div>
            </div>
       
    )
}

export default HeroImage;