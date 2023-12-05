import React, { useContext, useState } from "react";
import { JsonContext } from "../App";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';


export const Contact = () => {
  const data = useContext(JsonContext);


  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xwkddwky",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div className="contactmain"><div className="contact">
      <h1 className="header1">Let's work together..</h1>
      <form onSubmit={handleOnSubmit} className="formClass">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <button className="buttons"type="submit" disabled={serverState.submitting}>
          Submit
        </button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg,header" : "header"}>
            {serverState.status.msg}
          </p>
        )}
      </form>
      </div> 
          <div className="social">
     
      <div className="float">
      <a href="https://www.linkedin.com/in/debugbhandari/"><FontAwesomeIcon className="faIcon" icon={icon({name:'linkedin', style:'brands'})} /></a>
  <a href="https://blog.debugbhandari.link/"><FontAwesomeIcon className="faIcon" icon={icon({name:'blogger', style:'brands'})} /></a>
  <a href="https://www.facebook.com/Deepbh/"><FontAwesomeIcon className="faIcon" icon={icon({name:'facebook', style:'brands'})} /></a>
  <a href="https://www.instagram.com/deepbh1/"><FontAwesomeIcon className="faIcon" icon={icon({name:'instagram', style:'brands'})}  /></a>
  
</div>
      </div>
    </div>
  );
};
