import React, { createContext, useContext, useState, useEffect } from "react";
import PP from "../assets/logoimg.png";
import Ecom from "../assets/port-assets/ecom.gif";
import Vacay from "../assets/port-assets/vacay.gif";
//import Blog from "../assets/port-assets/blog.gif";
import JobdLink from "../assets/port-assets/jobdlink.gif";
import NgPort from "../assets/port-assets/ngport.gif";
import { JsonContext } from "../App";
import { Link } from "react-router-dom";

import "./index.css";

export const Landing = () => {
  const data = useContext(JsonContext);

  return (
    <div className="landing" id="landing">
      <div className="deskMain">
        <div className="introSide">
          <img src={PP} className="pp" alt="propic" />
          <h2 className="header1">Deepak Bhandari</h2>
          <div className="myDesc">
            <p className="introp">
              Enthusiastic Full stack web-dev <br></br> AWS certified Cloud
              Practitioner<br></br>bhandarideepakdev@gmail.com<br></br>
              Nepali/Helsinki/English
            </p>
            <br></br>
            <br></br>
            <a href="#contact">
              <button className="button1">Lets Collaborate</button>
            </a>
          </div>
        </div>
        <div className="projSide">
          <div className="demoTxt">
            <p className="header3_bright ">Projects</p>
          </div>
          <div className="boxes">
            {data.projects.map((proj) => (
              <div
                className="box"
                key={proj.imageUrl}
                onClick={() =>
                  window.open(proj.url ? proj.url : proj.gitRepo, "_blank")
                }
              >
                <div className="showbox">
                  <img
                    src={
                      proj.imageUrl === "ecom"
                        ? Ecom
                        : proj.imageUrl === "vacay"
                        ? Vacay
                        : proj.imageUrl === "ngport"
                        ? NgPort
                        : JobdLink
                    }
                    alt="project"
                    className="projimg"
                  />
                </div>

                <div className="hidbox">
                  <p className="header3_bright">{proj.title}</p>
                  <p id="projDesc">
                    {proj.description}
                    {proj.tools}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
