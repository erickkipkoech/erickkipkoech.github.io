import "./FooterStyles.css";

import React from "react";
import {FaGithub, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter} from "react-icons/fa";
const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                   
                        <div>
                            <p>Nairobi, Kenya</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        123456789</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        kipkoecher@ueab.ac.ke</h4>
                    </div> 
                </div>
                <div className="right">
                    <h4>About</h4>
                    <p>My name is Erick Kipkoech, a Software Developer</p>
                    <div className="social">
                        <FaTwitter size={30} style={{color:"#fff",marginRight:"2rem"}}/>
                        <FaLinkedin size={30} style={{color:"#fff",marginRight:"2rem"}}/>
                        <FaGithub size={30} style={{color:"#fff",marginRight:"2rem"}}/>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}
export default Footer;