import "./HeroImageProject.css";
import React, { Component } from "react";
import p3 from "../assets/p3.jpg";

class HeroImageProject extends Component{
    render(){return(
        <div className="hero-img">
            <div className="heading">
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
            </div>
        </div>
    )}
    
}
export default HeroImageProject