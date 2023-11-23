import React, { createContext, useContext, useState } from "react";
import PP from "../assets/logoimg.jpeg";
import { JsonContext } from "../App";

import "./index.css";
import Tictactoe from "./Tictactoe";

export const StatusContext = createContext({ status: "", setStatus: () => {} });

export const Landing = () => {
  const data = useContext(JsonContext);
  console.log(JSON.stringify(data));

  const [stateus, setStateus] = useState("");
  const value = { stateus, setStateus };
  return (
    <StatusContext.Provider value={value}>
      <div className="landing">
        <div className="deskMain">
        <div className="introSide">
            <img src={PP} className="pp" alt="propic" />
            <h2>Deepak Bhandari</h2>
            <div className="myDesc">
              <p>
                Full stack web-dev <br></br> AWS certified Cloud Practitioner
              </p>
            </div>
          </div>
          
          <div className="boxes">
            <div className="box">
              <div
                className="showbox"
                style={{
                  backgroundImage: `url("https://drive.google.com/uc?export=view&id=1mW9Z1H_78zJ_oLLm2MX4EFKbFsBh9dGe")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="hidbox">
                {data.projects[0].title}
                <br />
                <p id="ttt">
                  {data.projects[0].description}
                  <br />
                  {data.projects[0].tools}
                </p>
              </div>
            </div>
            <div className="box">
              <div className="showbox">
                <Tictactoe />
              </div>
              <div className="hidbox">
                Have fun with TicTacToe! <br />
                {stateus}
              </div>
            </div>
            <div className="box">
              <div
                className="showbox"
                style={{
                  backgroundImage: `url("https://drive.google.com/uc?export=view&id=13yqOzLZJNoTtx2FLJ-G0p6oyh-NTuSCy")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="hidbox">
                {data.projects[1].title}
                <br />
                <p id="ttt">
                  {data.projects[1].description}
                  <br />
                  {data.projects[1].tools}
                </p>
              </div>
            </div>

            <div className="box">
              <div
                className="showbox"
                style={{
                  backgroundImage: `url("https://drive.google.com/uc?export=view&id=1XQ1olYpfZoDvAzD-Y5zM9v5j2YY4b01L")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="hidbox">
                {data.projects[3].title}
                <br />
                <p id="ttt">
                  {data.projects[3].description}
                  <br />
                  {data.projects[3].tools}
                </p>
              </div>
            </div>
            <div className="box">
              <div
                className="showbox"
                style={{
                  backgroundImage: `url("https://drive.google.com/uc?export=view&id=1wnPltiJdxqrDUwYP6E6nclwAbGTHYynq")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="hidbox">
                {data.projects[2].title}
                <br />
                <p id="ttt">
                  {data.projects[2].description}
                  <br />
                  {data.projects[2].tools}
                </p>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </StatusContext.Provider>
  );
};
