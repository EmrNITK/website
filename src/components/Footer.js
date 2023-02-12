import React from 'react'
import "../assets/styles/footer.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'


export default function Footer(){
    return(
        <div className='footer-container'>
            <div className='footer-container-small'>
                <div className='footer-title-container'>
                    <h1 className='footer-title'> Embedded Systems <br></br>and{" "}
                    <span className="footer-robotics-text">Robotics</span></h1>
                    <div className='footer-button'>
                        <button className='footer-contact-button'><a href='#Contact'>Contact Us</a></button>
                    </div>
                </div>
                <div className='footer-link-container'>
                    <a href='#Home' className='footer-link'>Home</a>
                    <a href='#Events' className='footer-link '>Events</a>
                    <a href='#Team' className='footer-link'>Team</a>
                    <a href='#Workshops' className='footer-link'>Workshops</a>
                </div>
                <div className='footer-icon-container'>
                    <a href="#Linkedin" className='footer-icons'><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#Github" className='footer-icons'><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="#Instagram" className='footer-icons'><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
        </div>
    )
}