import React from "react";
import { team } from "../data";
import team_m from "./images/team_m.png";
import team_bg from "./images/team_bg1.png";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import mail from "./images/mail.png";
import "./styles/Team.css";
import Carousel from 'react-multi-carousel';
import './styles/team.css';
import './styles/card.css';
import 'react-multi-carousel/lib/styles.css';
import Card from "./Teamcard";

export default function Team(){
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className = "team" id="teams">
      <div className="container_2">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <p className = "team-heading">Team</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                          <Card
                          name= "Lorem Ipsum"
                          img= ""
                          linkedin="xyz"
                          github="https://github.com/EmrNITK/website"
                          insta = "xyz"
                          />
                          <Card
                          name= "Lorem Ipsum"
                          img= ""
                          linkedin="xyz"
                          github="xyz"
                          insta = "xyz"
                          />
                          <Card
                          name= "Lorem Ipsum"
                          img= ""
                          linkedin="xyz"
                          github="xyz"
                          insta = "xyz"
                          />
                          <Card
                          name= "Lorem Ipsum"
                          img= ""
                          linkedin="xyz"
                          github="xyz"
                          insta = "xyz"
                          />
                          <Card
                          name= "Lorem Ipsum"
                          img= ""
                          linkedin="xyz"
                          github="xyz"
                          insta = "xyz"
                          />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
        <img src={team_bg} alt="team_bg" class="team_bg" />
        <div className="teamRow">
          <h1 class="teamH">TEAM</h1>
          <div className="teamPoster">
            {team.map((element) => (
              <div class="teamM block  rounded-lg bg-white p-6 shadow-lg">
                <img class="teamMIMG" src={team_m} alt="team_m" />
                <h5 class="mb-2 pt-5 text-xl font-medium leading-tight text-gray-900">
                  {element.name}
                </h5>
                <h4>{element.pos}</h4>
                <div className="icons">
                  <a href={element.linkedin_profile}>
                    <img className="icon" src={linkedin} alt="linkedin" />
                  </a>
                  <a href={element.github_profile}>
                    <img
                      className="icon"
                      src={github}
                      alt="github"
                      href={element.github_profile}
                    />
                  </a>
                  <a href={element.email}>
                    <img
                      className="icon"
                      src={mail}
                      alt="mail"
                      href={element.email}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
