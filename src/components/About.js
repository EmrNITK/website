import React from "react";
import "../assets/styles/About.css";
import gif from "../assets/images/giphy_1.gif";

export default function About() {
  return (
    <section id="about">
      <div className="bg-lr-black flex flex-col text-white  md:flex-row about_text">
        <div className="basis-1/2">
          <h1 className="py-5 text-3xl font-medium md:py-10%">
            Embedded Systems <br></br>and{" "}
            <span className="robotics-text">Robotics</span>
          </h1>
          <p className="pb-5 md:pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
          </p>
          <div className="about_container">
            <button class="contact-button ">Contact Us</button>
            <div className="circle">C</div>
          </div>
        </div>
        <div className="basis-1/2 py-10 md:py-0">
          <img src={gif} alt="gif" className="gif mx-auto " />
        </div>
      </div>
    </section>
  );
}
