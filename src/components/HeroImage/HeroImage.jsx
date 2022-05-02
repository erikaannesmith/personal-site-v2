import "./HeroImage.css";

export const HeroImage = ({ image, children }) => (
  <div className="img-wrapper">
    <img alt="desert" className="img" src={image} />
    {children}
  </div>
);
