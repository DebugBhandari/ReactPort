import React, { createContext, useContext, useState } from "react";
import PP from "../assets/logoimg.jpeg";
import { JsonContext } from "../App";


import "./index.css";
import Tictactoe from "./Tictactoe";

export const StatusContext = createContext({ status: "", setStatus: () => {} });

export const Landing = () => {
  const data = useContext(JsonContext);

  const [stateus, setStateus] = useState("");
  const value = { stateus, setStateus };
  return (
    <StatusContext.Provider value={value}>
      <div className="landing">
        <div className="deskMain">
          <div className="introSide">
            <img src={PP} className="pp" alt="propic" />
            <h2 className="header1">Deepak Bhandari</h2>
            <div className="myDesc">
              <p>
                Enthusiastic Full stack web-dev <br></br> AWS certified Cloud Practitioner<br></br>bhandarideepakdev@gmail.com<br></br>
                Nepali/Helsinki/English
              </p>
              <div className="tic">
                <div className="tac header2">
                  TicTacToe!!! <br />
                  {stateus}
                </div>
                <div className="toe">
                  <Tictactoe />
                </div>
              </div>
            </div>
          </div>
          <div className="projSide">
            <div className="boxes">
              {data.projects.map((proj) => (
                <div className="box">
                  <a href={proj.url} target="_blank" rel="noreferrer">
                    <div
                      className="showbox "
                      style={{
                        backgroundImage: `url(${proj.imageUrl})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        alt: "click me",
                      }}
                    ></div>
                  </a>
                  <div className="hidbox">
                    {proj.title}
                    <br></br><br></br>
                    <p id="ttt">
                      {proj.description}
                      <br />
                      {proj.tools}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="header2">Click on images for Demo</p>
          </div>
        </div>
      </div>
    </StatusContext.Provider>
  );
};
