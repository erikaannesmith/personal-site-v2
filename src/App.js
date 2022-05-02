import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import { FancyButton } from "./components/FancyButton/FancyButton";
import { Header } from "./components/Header/Header";
import { HeroImage } from "./components/HeroImage/HeroImage";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Section } from "./components/Section/Section";
import desert from "./assets/desert.jpg";

import { items } from "./items";

function App() {
  return (
    <Router>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
      </style>
      <Header />
      <HeroImage image={desert}>
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
    </Router>
  );
}

export default App;
