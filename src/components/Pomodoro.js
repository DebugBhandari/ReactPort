import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Pomodoro() {
  const [joke, setJoke] = useState("null");
  const [timer, setTimer] = useState(5); // 10 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const handleStartTimer = () => {
    setIsActive(true);
  };

  const handleResetTimer = () => {
    setIsActive(false);
    setTimer(5);
    setHasFinished(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else if (isActive && timer === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  useEffect(() => {
    if (hasFinished) {
      axios
        .get(
          "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit"
        )
        .then((response) => {
          if (response.data.type === "single") {
            setJoke(response.data.joke);
          } else {
            setJoke(response.data.setup + "\n" + response.data.delivery);
          }
        })
        .catch(
          (error) => {
            console.error("Error: ", error);
          },
          [hasFinished]
        );
    }
  }, [hasFinished]);
  return (
    <div className="pomo" id="pomo">
      <h2 className="header1">Pomodoro.</h2>
      <h2 className="header3">Hit a lap and get a chuckle.</h2>
      <p>
        Set your timer and start working. When the timer ends, you get a joke.
      </p>
      <div className="timerBox">
        <div className="timer">
          <input
            className="timerMsg"
            type="number"
            value={minutes}
            onChange={(e) => setTimer(e.target.value * 60 + seconds)}
          />
          :
          <input
            className="timerMsg"
            type="number"
            value={seconds}
            onChange={(e) => setTimer(minutes * 60 + Number(e.target.value))}
          />
        </div>
        <div className="timerBtns">
          <button className="timerBtn button1" onClick={handleStartTimer}>
            Start
          </button>
          <button className="timerBtn button1" onClick={handleResetTimer}>
            Reset
          </button>
        </div>
      </div>
      <div className="doro">
        {hasFinished && (
          <h2 className="header1">Congrats. Focus acomplished.</h2>
        )}
        {hasFinished && <h2>{joke}</h2>}
      </div>
    </div>
  );
}
