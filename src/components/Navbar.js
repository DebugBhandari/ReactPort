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
 
 
  console.log(inValue);
  return (
    <div className="nav_bar">
      <div className="imgdiv">
        <Link to="/">
          {" "}
          <img className="logoDB" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="menu-wrap">
        <input type="checkbox" className="toggler" checked={inValue} onClick={(e)=>inputHandler(e)}/>
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div className="">
            <div className="mbl-menu">
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
                    Hello
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbtns">
        <Link to="/">
          <button>Landing</button>
        </Link>
        <Link to="/Cv">
          <button>Edu.</button>
        </Link>
        <Link to="/Contact">
          <button>Hello</button>
        </Link>
      </div>
    </div>
  );
};
