import React, { useContext } from "react";
import { JsonContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export const Cvpage = () => {
  const data = useContext(JsonContext);
  return (
    <div className="cvPage">
      <div className="introdiv"> </div>

      <div className="typewriter">
        <p> {data.name}, Metropolia UAS,</p>
        <p> {data.education[1].title} Web/UX Dev 🇳🇵🇫🇮</p>
        <p> BhandariDeepakDev@gmail.com</p>
      </div>

      <div className="cv-row">
        <button className="button1 button2">
          
          <a
            href="https://drive.google.com/file/d/1GZqo7iC2lJeZWi-Np0Ns8AECnJhH7sds/view?usp=drive_link"
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

      <div className="cvsec">
        <h2 className="header2">Skills:</h2>
        <div className="schools">
          <h4 className="header3">Frontend</h4>
          {data.skills[0].join(", ")}
        </div>
        <div className="schools">
          <h4 className="header3">Backend</h4>
          {data.skills[1].join(", ")}
        </div>
        <div className="schools">
          <h4 className="header3">Databases</h4>
          {data.skills[2].join(", ")}
        </div>
        <div className="schools">
          <h4 className="header3">Miscellaneous</h4>
          {data.skills[3].join(", ")}
        </div>
      </div>
      <div className="cvsec">
        <h2 className="header2">Education:</h2>

        {data.education.map((schools) => (
          <div className="schools" key={schools.title}>
            <h4 className="header3">{schools.organization}</h4>

            <p>
              {schools.title + " " + schools.address + " " + schools.graduation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
