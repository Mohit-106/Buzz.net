import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";


const Card = (props) => {
  return (
    <>
     
        <div className="card">
          <img src={props.imgsrc} className="card-img-top image" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            
            <NavLink to="#" className="btn btn-primary">
              Enroll Now
            </NavLink>
          </div>
        </div>
     
    </>
  );
};

export default Card;
