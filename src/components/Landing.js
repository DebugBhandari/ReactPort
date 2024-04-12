import React, { createContext, useContext, useState, useEffect } from "react";
import PP from "../assets/logoimg.png";
import Ecom from "../assets/port-assets/ecom.gif";
import Vacay from "../assets/port-assets/vacay.gif";
import Blog from "../assets/port-assets/blog.gif";
import Ngport from "../assets/port-assets/ngport.gif";
import { JsonContext } from "../App";


import "./index.css";
import Tictactoe from "./Tictactoe";


export const Landing = () => {
  const data = useContext(JsonContext);

  return (
      <div className="landing">
        <div className="deskMain">
          <div className="introSide">
            <img src={PP} className="pp" alt="propic" />
            <h2 className="header1">Deepak Bhandari</h2>
            <div className="myDesc">
              <p className="introp">
                Enthusiastic Full stack web-dev <br></br> AWS certified Cloud Practitioner<br></br>bhandarideepakdev@gmail.com<br></br>
                Nepali/Helsinki/English
              </p>
              <div className="tic">
                <div className="tac header1">
                  TicTacToe!!! 
                 
                </div>
                <div className="toe">
                  <Tictactoe />
                </div>
              </div>
            </div>
          </div>
          <div className="projSide">

          <div className="demoTxt"><p className="header3 ">Projects</p></div>
            <div className="boxes">
            
              {data.projects.map((proj) => (
                <div className="box" key={proj.url}>
                  
                 
                    <div
                      className="showbox ">
                      <img
                        src={proj.imageUrl === "ecom" ? Ecom : proj.imageUrl === "vacay" ? Vacay : proj.imageUrl === "blog" ? Blog : Ngport}
                        alt="project"
                        className="projimg"/>
                    </div>
                   
                  
                  <div className="hidbox">
                    <p className="header3">{proj.title}</p>
                    <p id="projDesc">
                      {proj.description}
                      <br />
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
