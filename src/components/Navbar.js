import React, { useState } from "react";
import logo from "../assets/logoDB.png";
import "../App.css";

import "./index.css";
// import { ProfileHover } from "./ProfileHover";
// import { SignInHover } from "./SignInHover";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const imgStyle = {
    width: "60px",
    height: "50px",
    borderRadius: "10px"
  };
  const [inValue, setInValue] = useState(false);

  const inputHandler = (e) => {
    setInValue(!inValue);
  };

  return (
    <div className="nav_bar">
      <div className="imgDiv">
        <Link to="/">
          {" "}
          <img className="logoDB" src={logo} style={imgStyle} alt="logo" />
        </Link>
      </div>

      <div className="menu-wrap">
        <input
          type="checkbox"
          className="toggler"
          onChange={(e) => inputHandler(e)}
          checked={inValue}
        />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div className="">
            <div className="mbl-menu header1">
              <ul>
                <li>
                  <a href="#landing" onClick={(e) => inputHandler(e)}>
                    Landing
                  </a>
                </li>
                <li>
                  <a href="#cvPage" onClick={(e) => inputHandler(e)}>
                    Edu.
                  </a>
                </li>

                <li>
                  <a href="#pomo" onClick={(e) => inputHandler(e)}>
                    Pomodoro
                  </a>
                </li>
                <li>
                  <a href="#todoList" onClick={(e) => inputHandler(e)}>
                    PlayGround
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => inputHandler(e)}>
                    Socials
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbtns">
        <a href="#landing">
          <button className="button1">Landing</button>
        </a>

        <a href="#cvPage">
          <button className="button1">Edu.</button>
        </a>
        <a href="#pomo">
          <button className="button1">Pomodoro</button>
        </a>
        <a href="#todoList">
          <button className="button1">PlayGround</button>
        </a>
        <a href="#contact">
          <button className="button1">Socials</button>
        </a>
      </div>
    </div>
  );
};
