import "./Styles.css";
import techIcons from "../data/techIcons";

const TechRoller = () => {
  return (
    <div className="technologies-container">
      <div className="technologies-slider">
        <div className="technologies-track">
          {techIcons.map((icon, index) => (
            <span key={index} className="tech-icon">{icon}</span>
          ))}
          {techIcons.map((icon, index) => (
            <span key={`duplicate-${index}`} className="tech-icon">{icon}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechRoller;