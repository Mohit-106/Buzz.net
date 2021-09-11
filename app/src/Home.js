import React from "react";
import "./home.css";
import web from "../src/img/img2.svg";
import Common from "./Common"


const Home = () => {
  return (
    <>
       <Common name="Enhance your skill set with" img={web} visit="/services" btnname="Get Started" />
    </>
  );
};

export default Home;
