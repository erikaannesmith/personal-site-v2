import "./Section.css";

import { useLocation } from "react-router-dom";

export const Section = ({ content }) => {
  const { label, key, body } = content;
  let location = useLocation();
  return (
    <div className="section">
      <h2
        id={key}
        className={`section-label ${
          location.hash.includes(key) ? "active" : undefined
        }`}
      >
        {label}
      </h2>
      {body}
    </div>
  );
};
