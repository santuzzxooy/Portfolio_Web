import "./Styles.css";
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaAngular, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiResponsive } from "react-icons/di";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaSatelliteDish } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";

const frontendSkills = [
  { icon: <IoLogoJavascript />, name: "JavaScript, TypeScript" },
  { icon: <FaReact />, name: "React.js, Next.js" },
  { icon: <DiResponsive />, name: "Responsive Development" },
  { icon: <RiTailwindCssLine />, name: "UI/UX with Tailwind & Bootstrap" },
  { icon: <FaAngular />, name: "Angular JS" }
];

const backendSkills = [
  { icon: <FaNodeJs />, name: "Node.js, Express.js" },
  { icon: <FaDatabase />, name: "Databases (MongoDB, PostgreSQL, MySQL, Oracle)" },
  { icon: <FaSatelliteDish />, name: "APIs REST & GraphQL" },
  { icon: <SiSpring />, name: "Java SpringBoot" },
  { icon: <FaPython />, name: "Python Frameworks (Flask, Django)" },
  { icon: <FaGithub />, name: "Git, GitHub, CI/CD" }
];

const SkillsCard = () => {
  return (
    <div className="PI_card">
      <h2>Technical Skills</h2>
      <div className="skills_container">
        {/* 🔷 Frontend Skills */}
        <div className="skills_section">
          <h3>Frontend</h3>
          <ul className="skills_list">
            {frontendSkills.map((skill, index) => (
              <li key={index}>
                {skill.icon} {skill.name}
              </li>
            ))}
          </ul>
        </div>

        {/* 🔶 Backend Skills */}
        <div className="skills_section">
          <h3>Backend</h3>
          <ul className="skills_list">
            {backendSkills.map((skill, index) => (
              <li key={index}>
                {skill.icon} {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;