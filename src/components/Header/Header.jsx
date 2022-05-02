import "./Header.css";

import { Link } from "react-router-dom";

export const Header = () => (
  <Link to="/" className="header">
    <span>erika smith</span>
    <span>software engineer</span>
  </Link>
);
