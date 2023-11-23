import React from "react";
import logo from "../assets/logoDB.png";

import "./index.css";
// import { ProfileHover } from "./ProfileHover";
// import { SignInHover } from "./SignInHover";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="nav_bar">
      
      <div className="imgdiv">
       <Link to='/'> <img className="logoDB" src={logo} alt="logo" /></Link>
      </div>
      <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div className="">
          <div className="">
            <ul>
              <li>
                <Link to='/'>Landing </Link>
              </li>
              <li>
                <Link to='/Cv'> CV</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
      <div className="navbtns">
        <Link to='/'>
          <button>Landing</button>
        </Link>
        <Link to='/Cv'>
          <button>CV</button>
        </Link>
      </div>
    </div>
  );
};
