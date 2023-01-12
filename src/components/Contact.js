import React from 'react'
import '../assets/styles/Contact.css'
function contact() {
    return (
        <>
          <section id="contact" className="contact" >
    <div className="content">
        <h2>Contact Us</h2>
        <p>Embedded System and Robotics ,is an organization whose main motive is to empower the student  to know about  DIP,Embedded System and Robo Soccer,
             by orgainsing webinar,competition and techsparda events</p>
    </div>
    <div className="container">
    <div className="contactInfo">
            <div className="box">
                <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="text">
                    <h3>Address</h3>
                    <p> Nit Kurukshetra<br/>Kurukshetra,Haryana<br/>136119</p>
                </div>
            </div>
            <div className="box">
                  <div className="icon"><i className="fas fa-phone" aria-hidden="true" ></i></div>
                <div className="text">
                    <h3>Phone</h3>
                    <p> +91-6207013849</p>
                </div>
            </div>
            <div className="box">
                <div className="icon"><i className ="fas fa-envelope" ></i></div>
                <div className="text">
                    <h3>Email</h3>
                    <p>rohan_12015150@nitkkr.ac.in</p>
                </div>
            </div>
        </div>
        <div className="contactForm">
            <form>
                <h2>Send Message</h2>
                <div className="inputBox">
                    <input type="text" name="" required="required"/>
                    <span>Full Name</span>
                </div>
                <div className="inputBox">
                    <input type="text" name="" required="required"/>
                    <span>Email</span>
                </div>
                <div className="inputBox">
                    <textarea required="required"></textarea>
                    <span>Type Your message</span>
                </div>
                <div className="inputBox">
                    <input type="submit" name="" value="Send"/>

                </div>
            </form>
        </div>
    </div>
  </section>
        </>
    )
}

export default contact
