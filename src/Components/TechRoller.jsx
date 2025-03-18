import "./Styles.css";
import { FaReact, FaNodeJs, FaPython, FaAngular, FaGithub, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiSpring, SiFlask, SiDjango, SiMongodb, SiPostgresql, SiMysql, SiOracle, SiBootstrap, SiGraphql } from "react-icons/si";

const techIcons = [
  <FaReact />, <FaNodeJs />, <FaPython />, <FaAngular />, <FaHtml5 />, <FaCss3 />, <SiJavascript />, <SiTypescript />,
  <SiSpring />, <SiFlask />, <SiDjango />, <SiMongodb />, <SiPostgresql />, <SiMysql />,
  <SiOracle />, <SiTailwindcss />, <SiBootstrap />, <SiGraphql />, <FaGithub />
];

const TechRoller = () => {
  return (
    <div className="technologies-container">
      <div className="technologies-slider">
        <div className="technologies-track">
          {techIcons.map((icon, index) => (
            <span key={index} className="tech-icon">{icon}</span>
          ))}
          {/* Se duplican los íconos para la animación continua */}
          {techIcons.map((icon, index) => (
            <span key={`duplicate-${index}`} className="tech-icon">{icon}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechRoller;