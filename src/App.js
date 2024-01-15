import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { Footer } from "./components/footer";
import { data } from "./assets/data.js";

import { Landing } from "./components/Landing";
import { Cvpage } from "./components/Cvpage";
import { Contact } from "./components/Contact";

import logo from "./assets/logoDB.png";

export const JsonContext = React.createContext({});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <JsonContext.Provider value={data}>
          <NavBar />
          <div className="glowBoy"></div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/CV" element={<Cvpage />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer />
        </JsonContext.Provider>
      </BrowserRouter>
      {/* <img className="logoBG" src={logo} alt="logo" /> */}
      <div className="logoBG"></div>
    </div>
  );
}

export default App;
