import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { Footer } from "./components/footer";
import { data } from "./assets/data.js";
import { Landing } from "./components/Landing";
import { Cvpage } from "./components/Cvpage";
import { Contact } from "./components/Contact";
import Pomodoro from "./components/Pomodoro";
import TodoList from "./components/TodoList";
import { InView } from "react-intersection-observer";

export const JsonContext = React.createContext({});

function App() {
  const thresholdValue = 1;

  const [showLanding, setShowLanding] = useState(false);
  const [showPomodoro, setShowPomodoro] = useState(false);
  const [showTodoList, setShowTodoList] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <JsonContext.Provider value={data}>
          <div className="glowBoy"></div>
          <NavBar />
          <div className="app-body">
            <Landing />
            <Cvpage />
            <Pomodoro />
            <TodoList />
            <Contact />
          </div>
          <Footer />
        </JsonContext.Provider>
      </BrowserRouter>
      <div className="logoBG"></div>
    </div>
  );
}

export default App;
