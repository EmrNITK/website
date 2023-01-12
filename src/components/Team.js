import React from "react";

<<<<<<< Updated upstream
export default function Team(){

  return (
    <section id="team">

    </section>
  )
}
=======
import Carousel from 'react-multi-carousel';
import './styles/Team.css';
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

    </section>
  )
}
>>>>>>> Stashed changes
