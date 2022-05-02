import "./Sidebar.css";

import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

import { ArrowRight } from "../../assets/ArrowRight";
import { ExternalLink } from "../../assets/ExternalLink";
import { Email } from "../../assets/Email";
import { Download } from "../../assets/Download";
import resume from "../../assets/erikasmith_resume_2022.pdf";

import { items } from "../../items";

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="navigation">
        {items.map((item) => (
          <HashLink
            to={`/#${item.key}`}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            key={item.key}
            className={`sidebar-item ${
              location.hash.includes(item.key) ? "active" : undefined
            }`}
          >
            <ArrowRight /> {item.label}
          </HashLink>
        ))}
      </div>
      <div className="resources">
        <a
          className="sidebar-item"
          download="erikasmith_resume.pdf"
          href={resume}
        >
          <Download /> download resume
        </a>
        <a className="sidebar-item" href="mailto:hello@erikasmith.dev">
          <Email /> email
        </a>
        <a
          className="sidebar-item"
          href="http://linkedin.com/in/erikaannesmith"
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink /> linkedin
        </a>
        <a
          className="sidebar-item"
          href="http://github.com/erikaannesmith"
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink /> github
        </a>
      </div>
    </div>
  );
};
