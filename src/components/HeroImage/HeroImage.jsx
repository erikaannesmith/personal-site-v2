import "./HeroImage.css";
import desert from "../../assets/desert.jpg";
import ocean from "../../assets/ocean.jpg";

export const HeroImage = ({ display, children }) => (
  <div className="img-wrapper">
    <img
      alt="desert"
      className="img"
      src={display === "desert" ? desert : ocean}
    />
    {children}
  </div>
);
