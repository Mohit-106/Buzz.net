import React from "react";
import "./home.css";
import web from "../src/img/img1.svg";
import Common from "./Common"

const About = () => {
  return (
    <>
    <Common name="Welcome to about page" img={web} visit="/contact" btnname="Contact Now" />
     
    </>
  );
};

export default About;
