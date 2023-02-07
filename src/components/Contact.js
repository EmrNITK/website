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
                    <p> Nit Kurukshetra<br/>Kurukshetra,Haryana</p>
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
                    <p>emr@nitkkr.ac.in</p>
                </div>
            </div>
        </div>
        {/* <div className="contactForm">
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
        </div> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6914.336852476472!2d76.81218044835846!3d29.945833673846664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e3f51bab18cb5%3A0x96200205143e35f6!2sNIT%2C%20Thanesar%2C%20Haryana%20136119!5e0!3m2!1sen!2sin!4v1675796177740!5m2!1sen!2sin" width="100%" height="450" style={{border:0, marginTop: "2%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
    </div>
  </section>
        </>
    )
}

export default contact
