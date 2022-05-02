import { HashLink } from "react-router-hash-link";

import "./FancyButton.scss";

export const FancyButton = ({ children }) => (
  <HashLink
    className="button"
    to={`/#about-me`}
    scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}
  >
    {children}
    <div className="button__horizontal"></div>
    <div className="button__vertical"></div>
  </HashLink>
);
