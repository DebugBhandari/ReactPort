import React, { useContext } from "react";
import { JsonContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { InView } from "react-intersection-observer";
import "./index.css"; // Ensure animations and CSS styles are defined here

export const Cvpage = () => {
  const data = useContext(JsonContext);

  return (
    <div className="cvPage" id="cvPage">
      <div className="introdiv"> </div>

      <div className="typewriter">
        <p>{data.name}, Metropolia UAS,</p>
        <p>{data.education[1].title} Web/UX Dev 🇳🇵🇫🇮</p>
        <p>BhandariDeepakDev@gmail.com</p>
      </div>

      <div className="cv-row">
        <button className="button1 button2">
          <a
            href="https://drive.google.com/file/d/1j_Q1ZideI58NwoyF_0wBmX0vTkVJ-hJn/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </button>
        <button className="button1 button2">
          <a
            href="https://www.credly.com/badges/8b97c288-ebb2-4dcf-87a6-724daa2717b9/linked_in"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="faIcon2"
              icon={icon({ name: "aws", style: "brands" })}
            />
          </a>
        </button>
      </div>

      {/* Skills Section with Individual Skills Animation */}
      <div className="cvsec">
        <h2 className="header2">Skills:</h2>
        {data.skills.map((category, index) => (
          <InView key={index} threshold={1}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`schools ${inView ? "fade-in" : "hidden"}`}
              >
                <h4 className="header3">
                  {["Frontend", "Backend", "Databases", "Others"][index]}
                </h4>
                <p>{category.join(", ")}</p>
              </div>
            )}
          </InView>
        ))}
      </div>

      {/* Education Section with Individual School Animation */}
      <div className="cvsec">
        <h2 className="header2">Education:</h2>
        {data.education.map((school) => (
          <InView key={school.title} threshold={1}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`schools ${inView ? "fade-in" : "hidden"}`}
              >
                <h4 className="header3">{school.organization}</h4>
                <p>
                  {school.title +
                    " " +
                    school.address +
                    " " +
                    school.graduation}
                </p>
              </div>
            )}
          </InView>
        ))}
      </div>
    </div>
  );
};
