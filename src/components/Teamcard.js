import React from "react";
import "../assets/styles/card.css";
// import '../assets/styles/teamcard.css';
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon3 from "../assets/nav-icon3.svg";
import navIcon4 from "../assets/nav-icon4.svg";
function Card(props) {
  return (
    <div className="card">
      <img className="circle-img" src={props.img} alt="avatar_img" />
      <p className="name ">{props.name}</p>
      <p className="desig ">
        <br></br>
        {props.position}
      </p>
      {/* <p className="designation ">{props.position}</p>  */}

      <div className="social-icon">
        <div className="icon-div">
          <a href={props.linkedin} target="_blank">
            <img src={navIcon1} alt="linkedin" />
          </a>
        </div>
        <div className="icon-div">
          <a href={props.github} target="_blank">
            <img src={navIcon4} alt="github" />
          </a>
        </div>
        {/* <div className = "icon-div"><a href={props.email} target="_blank"><img src={navIcon3} alt="email" /></a></div> */}
        <div className="icon-div">
          <a href={props.insta} target="_blank">
            <img src={navIcon3} alt="insta" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
