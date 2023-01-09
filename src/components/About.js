import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="flex flex-row bg-black text-white">
        <div className="basis-1/2 px-10 py-10">
          <h1 className="text-3xl font-medium pb-10">
            Embedded Systems <br></br>and{" "}
            <span className="robotics-text">Robotics</span>
          </h1>
          <p className="pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
          </p>
          <button class="contact-button ">Contact Us</button>
        </div>
        <div className="basis-1/2">
          <img src="/public/logo512.png" alt="gif" />
        </div>
      </div>
    </section>
  );
}
