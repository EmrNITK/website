import React from "react";
import "../assets/styles/About.css";
import gif from "../assets/images/giphy_1.gif";

export default function About() {
  return (
    <section id="about">
      <div className="bg-lr-black about_text flex flex-col  text-white md:flex-row">
        <div className="basis-1/2">
          <h1 className="md:py-10% py-5 text-3xl font-medium">
            Embedded Systems <br></br>and{" "}
            <span className="robotics-text">Robotics</span>
          </h1>
          <p className="pb-5 md:pb-10">
            Embedded Systems and Robotics club(EmR), a heaven for tech-minded
            people and robot enthusiasts. Here at EmR, we focus on spreading the
            knowledge of embedded systems and robotics to young engineers and
            building new helpful projects for the community.
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
