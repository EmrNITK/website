import React from "react";
import './styles/card.css';
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon3 from '../assets/nav-icon3.svg';
import navIcon4 from '../assets/nav-icon4.svg';
function Card(props) {
  return (
    <div className="card">
      
        <img className="circle-img" src={props.img} alt="avatar_img" />
        <p className="name">{props.name}</p>
      
     
        <div className="social-icon">
                <div className = "icon-div"><a  href={props.linkedin}><img src={navIcon1} alt="linkedin" /></a></div>
                <div className = "icon-div"><a href={props.github}><img src={navIcon4} alt="github" /></a></div>
                <div className = "icon-div"><a href={props.insta}><img src={navIcon3} alt="instagram" /></a></div>
              </div>
    </div>
  );
}