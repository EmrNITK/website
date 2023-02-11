import React from "react";
import "../assets/styles/About.css";
import gif from "../assets/images/giphy_1.gif";

export default function About() {
  return (
    <section id="about">
      <div className="flex flex-row bg-lr-black px-10  py-10 text-white">
        <div className="basis-1/2">
          <h1 className="py-10 text-3xl font-medium">
            Embeddedafdfsdf Systems <br></br>and{" "}
            <span className="robotics-text">Robotics</span>
          </h1>
          <p className="pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
          </p>
          <div className="container">
            <button class="contact-button ">Contact Us</button>
            <div className="circle">C</div>
          </div>
        </div>
        <div className="basis-1/2 pl-20">
          <img src={gif} alt="gif" className="gif h-auto max-w-full" />
        </div>
      </div>
    </section>
  );
}
