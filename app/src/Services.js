import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import "./navbar.css";

const Services = () => {
  return (
    <>
      <div className="my-4">
        <h1 className="courses">Our Courses</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
           
                  <div className="row gy-5">
                      {
                          Sdata.map((val,ind)=>{
                              return <Card key={ind} imgsrc={val.imgsrc} title={val.title}/>
                             
                          })
                      }
                  </div>
               
              </div>
            </div>
          </div>
      
     
    </>
  );
};

export default Services;
