import "./Header.css";

import { Link } from "react-router-dom";

export const Header = ({ display, setDisplay }) => (
  <Link to="/" className="header">
    <label
      class="switch"
      onClick={() => {
        display === "desert" ? setDisplay("ocean") : setDisplay("desert");
      }}
    >
      <input type="checkbox" className={display} />
      <span class="slider round" />
    </label>
    <div className="logo">
      <span>erika smith</span>
      <span>software engineer</span>
    </div>
  </Link>
);
