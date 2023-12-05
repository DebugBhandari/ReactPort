import React, { useContext } from "react";
import { JsonContext } from "../App";

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
     

     
      <div className="cvsec">
        <h2 className="">Skills:</h2>
        <div className="schools">
          <h4 className="header">Frontend</h4>
        {data.skills[0].join(', ')}</div>
        <div className="schools">
          <h4 className="header" >Backend</h4>
        {data.skills[1].join(', ')}</div>
        <div className="schools">
          <h4 className="header">Databases</h4>
        {data.skills[2].join(', ')}</div>
        <div className="schools">
          <h4 className="header">Miscellaneous</h4>
        {data.skills[3].join(', ')}</div>
       
        
      </div>
      <div className="cvsec">
        <h2>Education:</h2>
        
        {data.education.map((schools) => (
          <div className="schools" key={schools.title}>
            <h4 className="header">{schools.organization}</h4>
            
            <p>
              {schools.title + " " + schools.address + " " + schools.graduation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
