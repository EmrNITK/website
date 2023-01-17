import React from "react";
import { Outlet } from "react-router-dom";
import {useRef} from 'react';
import "../assets/styles/navbar.css";
import Logo from "../assets/images/logo.png";
import {FaBars,FaTimes} from "react-icons/fa";
export default function Navbar(){
const navRef=useRef();
const show=()=>{

navRef.current.classList.toggle("responsive_nav");

}
  return (
    <header>
     <div className="navy">
      <nav className="navbar" ref={navRef}>     
      <div className="logo">      <img src={Logo} />
    </div>   
    
      <a href="#Home" className="navbar-item">Home</a>
      <a href="#Events" className="navbar-item">Events</a>
      <a href="#Team" className="navbar-item">Team</a>
      <a href="#Contact" className="navbar-item">Contact</a>
      <a href="#Workshops" className="navbar-item">Workshops  </a>
      <a href="#Projects" className="navbar-item">Projects</a>
<button onClick={show} className="nav-btn nav-close-btn">
  <FaTimes/></button> 
      </nav>
      </div>
      <button className="nav-btn nav-open-btn" onClick={show}> <FaBars/></button>
      <Outlet />
    </header>
  )
}
