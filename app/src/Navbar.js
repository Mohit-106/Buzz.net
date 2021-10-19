import React from "react";

import "./navbar.css";

// import stylenavbar from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg ">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg sticky-top">
              <NavLink className="navbar-brand " to="/">
                <strong className="mynavbar">Buzz.net</strong>
              </NavLink>
              <button
                id="nav-toggle-button"
                className="navbar-toggler "
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className=" collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <NavLink
                      activeClassName="menu_active"
                      exact
                      className="nav-link"
                      to="/"
                    >
                      <p className="options">Home</p>
                    </NavLink>
                  </li>
                  <li clasName="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/services"
                    >
                      <p className="options">Courses</p>
                     
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/about"
                    >
                      <p className="options">About</p>
                      
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/contact"
                    >
                      <p className="options">Contact</p>
                      
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
