import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import portfolio1 from "../assets/portfolio1.jpg"
import portfolio from "../assets/portfolio.jpg"
const AboutContent=()=>{
    return(
        <div className="about">
            <div className="left">
                <h1>Who am I</h1> 
                <p> I am a full stack developer</p>
                <Link to={"/contact"}>
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={portfolio1} className="img" alt="image"/>
                    </div>
                    <div className="img-stack bottom">
                        <img src={portfolio} className="img" alt="image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutContent;