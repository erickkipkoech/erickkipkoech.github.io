import "./WorkCardStyles.css";
import React from "react";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
const WorkCard =(props)=>{
    return(
        <div className="project-card">
        <img src={props.imgsrc} alt="image"/>
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to={"url.com"} className="btn">Source</NavLink>
            </div>
        </div>
    </div>
    );
};
=======
import p7 from "../assets/p7.jpg"
import { NavLink } from "react-router-dom";
const WorkCard =()=>{
    return(
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                <div className="project-card">
                    <img src={p7} alt="image"/>
                    <h2 className="project-title">Project Title</h2>
                    <div className="pro-details">
                        <p>This is Text</p>
                        <div className="pro-btns">
                            <NavLink to={"url.com"} className="btn">View</NavLink>
                            <NavLink to={"url.com"} className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
>>>>>>> 768e3e72 (Initial Portfolio)
export default WorkCard;