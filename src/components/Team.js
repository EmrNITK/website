import React from "react";
import Carousel from "react-multi-carousel";
import "../assets/styles/Team.css";
import "../assets/styles/card.css";
import "react-multi-carousel/lib/styles.css";
import Card from "./Teamcard";
import { team } from "../data";
export default function Team() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="team" id="teams">
      <div className="container_2">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <p className="team-heading">TEAM</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                arrows={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {team.map((team =>(
                    <Card
                      // key={idx.toString()}
                      name = {team.name}
                      position = {team.position}
                      img = {team.img}
                      linkedin={team.linkedin_profile}
                      github={team.github_profile}
                      email={team.email}
                      insta= {team.insta}
                      />
                  )
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
