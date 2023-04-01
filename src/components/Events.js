import React from "react";
import "../assets/styles/events.css";
import Image from "../assets/images/chart.png";
import event_bg from "../assets/images/event_bg.mp4";

export default function Events() {
  return (
    <section id="events">
      <div className="event-container">
        <h1>EVENTS</h1>
        <div className="box-events">
          <div className="items">
            <img src={Image} />
            <h2>PIXAR</h2>
            <p>
              {" "}
              An event that tests one's knowledge of image processing and the OpenCV library. Cipher those secrets behind the images!


            </p>
          </div>
          <div className="items">
            <img src={Image} />
            <h2>SIMULATOR</h2>
            <p>
              {" "}
              Simulate complex embedded systems on a simulator software and earn your victory.

            </p>
          </div>
          <div className="items">
            <img src={Image} />
            <h2>RoboSoccer</h2>
            <p>
              {" "}
              A one vs one soccer match between two handmade bots. 
Score, defend, and achieve victory!

            </p>
          </div>
          <div className="items">
            <img src={Image} />
            <h2>MAZE UP</h2>
            <p>
              {" "}
              Solve a complex 2-D maze at the best time with your autonomous bot.

            </p>
          </div>
          <div className="items">
            <img src={Image} />
            <h2>BIT CODING</h2>
            <p>
              {" "}
              They say bits are what makes a computer. The event puts you on a trial of bit manipulation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


// Embedded Systems and Robotics club(EmR), a haven for tech-minded people and robot enthusiasts. 
// Here at EmR, we focus on spreading the knowledge of embedded systems and robotics to young engineers and building new helpful projects for the community.
// Events  -
// RoboSoccer - A one vs one soccer match between two handmade bots. 
// Score, defend, and achieve victory!
// Pixar - An event that tests one's knowledge of image processing and the OpenCV library. Cipher those secrets behind the images!
// Simulator - Simulate complex embedded systems on a simulator software and earn your victory.
// MazeUp - Solve a complex 2-D maze at the best time with your autonomous bot.
// Bit-Coding - They say bits are what makes a computer. The event puts you on a trial of bit manipulation.
