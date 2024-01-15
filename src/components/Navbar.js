import React, { useState } from "react";
import logo from "../assets/logoDB.png";

import "./index.css";
// import { ProfileHover } from "./ProfileHover";
// import { SignInHover } from "./SignInHover";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [inValue, setInValue] = useState(false);

  
  const inputHandler = (e) => {
    setInValue(!inValue);
  };
 
  const imgStyle = {
  width:'60px',
  height:'50px',
  borderRadius: '10px'
  }
 
  console.log(inValue);
  return (
    <div className="nav_bar">
      <div className="imgDiv">
        <Link to="/">
          {" "}
          <img className="logoDB" src={logo} style={imgStyle} alt="logo" />
        </Link>
        </div>

      <div className="menu-wrap">
        <input type="checkbox" className="toggler"  onChange={(e)=>inputHandler(e)} checked={inValue}/>
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div className="">
            <div className="mbl-menu header1">
              <ul>
                <li>
                  <Link to="/" onClick={(e)=>inputHandler(e)}>
                    Landing{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/Cv" onClick={(e)=>inputHandler(e)}>
                    {" "}
                    Edu.
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" onClick={(e)=>inputHandler(e)}>
                    {" "}
                    Socials
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbtns">
        <Link to="/">
          <button className="button1">Landing</button>
        </Link>
        <Link to="/Cv">
          <button className="button1">Edu.</button>
        </Link>
        <Link to="/Contact">
          <button className="button1">Socials</button>
        </Link>
      </div>
    </div>
  );
};
