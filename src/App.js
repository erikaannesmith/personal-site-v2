import "./App.css";
import { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { FancyButton } from "./components/FancyButton/FancyButton";
import { Header } from "./components/Header/Header";
import { HeroImage } from "./components/HeroImage/HeroImage";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Section } from "./components/Section/Section";
import desert from "./assets/desert.jpg";
import ocean from "./assets/ocean.jpg";

import { items } from "./items";

function App() {
  const [display, setDisplay] = useState("desert");
  return (
    <Router>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
      </style>
      <div className={`app ${display}`}>
        <Header display={display} setDisplay={setDisplay} />
        <HeroImage image={display === "desert" ? desert : ocean}>
          <div className="button-wrapper">
            <FancyButton>hey there</FancyButton>
          </div>
        </HeroImage>
        <div className="content">
          <Sidebar />
          <div className="sections">
            {items.map((item) => (
              <Section key={item.key} content={item} />
            ))}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
