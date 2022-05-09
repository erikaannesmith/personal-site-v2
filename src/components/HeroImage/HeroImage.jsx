import "./HeroImage.css";
import desert from "../../assets/desert.jpg";

export const HeroImage = ({ children }) => (
  <div className="img-wrapper">
    <img alt="desert" className="img" src={desert} />
    {children}
  </div>
);
