import React from "react";
import MultiplePizzas from "../assets/bakeryright.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>

         Welcome to Barbara's Bakery. At this place you can find the most delectable pastries in the world! 
         Since I was a kid I have enjoyed watching my mom bake stuffs; and that has always caught my attention. At a very young age I began baking and have been doing so ever since.I love the entire process of baking ans expermenting, and creating wonderful sweets that anyone at any age get to enjoy. shop our online store for a variety of cakes and patries.
        </p>
      </div>
    </div>
  );
}

export default About;
 
