import "./Styles.css";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiResponsive } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaSatelliteDish } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";

const SkillsCard = () => {
  return (
    <div className="PI_card">
      <div className="card_container">
        <h2>Technical Skills</h2>
        <ul className="skills-list">
          <li><IoLogoJavascript /> JavaScript, TypeScript</li>
          <li><FaReact /> React.js, Next.js</li>
          <li><DiResponsive /> Responsive Development</li>
          <li><FaNodeJs /> Node.js, Express.js</li>
          <li><FaDatabase /> Databases (MongoDB, PostgreSQL, Mysql, Oracle)</li>
          <li><RiTailwindCssLine /> UI/UX with Tailwind & Bootstrap</li>
          <li><FaSatelliteDish /> APIs REST & GraphQL</li>
          <li><FaGithub /> Git, GitHub, CI/CD</li>
          <li><SiSpring /> Java SpringBoot</li>
          <li><FaPython /> Python Frameworks (Flask, Django)</li>
          <li><FaAngular /> Angular JS</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsCard;