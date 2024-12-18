import React, { useContext } from "react";
import PP from "../assets/logoimg.png";
import Ecom from "../assets/port-assets/ecom.gif";
import Vacay from "../assets/port-assets/vacay.gif";
import JobdLink from "../assets/port-assets/jobdlink.gif";
import NgPort from "../assets/port-assets/ngport.gif";
import { JsonContext } from "../App";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import "./index.css";

export const Landing = () => {
  const data = useContext(JsonContext);

  return (
    <div className="landing" id="landing">
      <div className="deskMain">
        <div className="introSide">
          <img src={PP} className="pp" alt="Profile" />
          <h2 className="header1">Deepak Bhandari</h2>
          <div className="myDesc">
            <p className="introp">
              Enthusiastic Full Stack Web Dev <br />
              AWS Certified Cloud Practitioner
              <br />
              bhandarideepakdev@gmail.com
              <br />
              Nepali/Helsinki/English
            </p>
            <a href="#contact">
              <button className="button1">Let's Collaborate</button>
            </a>
          </div>
        </div>
        <div className="projSide">
          <div className="demoTxt">
            <p className="header3_bright">Projects</p>
          </div>
          <div className="boxes">
            {data.projects.map((proj, index) => (
              <InView threshold={1} key={index}>
                {({ inView, ref }) => (
                  <div
                    ref={ref}
                    className={`box ${inView ? "fade-in" : "hidden"}`}
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
                        alt="Project"
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
                )}
              </InView>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
