import React from "react";
import { team } from "../data";
import team_m from "./images/team_m.png";
import team_bg from "./images/team_bg1.png";
import "./styles/Team.css";

export default function Team() {
  return (
    <section id="team">
      <div className="container">
        <img src={team_bg} alt="team_bg" class="team_bg" />
        <div className="teamRow">
          {team.map((element) => (
            <div class="teamM block  rounded-lg bg-white p-6 shadow-lg">
              <img class="teamMIMG rounded-full" src={team_m} alt="team_m" />
              <h5 class="mb-2 text-xl font-medium leading-tight text-gray-900">
                {element.name}
              </h5>
              <h4>{element.pos}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
