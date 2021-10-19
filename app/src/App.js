import './App.css';


import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";




import {Switch,Route} from "react-router-dom";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">

      <>
      <Navbar/>
      
      
     

      <Switch>
        
      
        <Route exact path="/" component={Home}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        


        
      </Switch>
      <Footer/>


      </>







      
      
    </div>
  );
}
export default App;
