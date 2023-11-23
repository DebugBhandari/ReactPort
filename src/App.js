import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { Footer } from "./components/footer";
import { data } from "./assets/data.js";

import { Landing } from "./components/Landing";
import { Cvpage } from "./components/Cvpage";

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
          </Routes>
          <Footer />
        </JsonContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
