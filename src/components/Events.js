import React from "react";
import "../assets/styles/events.css"
import Image from "../assets/images/chart.png"

export default function Events(){

  return (
    <section id="events">
      <div className="event-container">
        <h1>EVENTS</h1>
        <div className="box">
          <div className="items" >
            <img src={Image} />
            <h2>SIMULATOR</h2>
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto</p>
          </div>
          <div className="items">
            <img src={Image} />
            <h2>SIMULATOR</h2>
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto</p>
          </div>
          <div className="items">
            <img src={Image} />
            <h2>SIMULATOR</h2>
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto</p>
          </div>
          <div className="items">
            <img src={Image} />
            <h2>SIMULATOR</h2>
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto</p>
          </div>
        </div>
      </div>
    </section>
  )
}
