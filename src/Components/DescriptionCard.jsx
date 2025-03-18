import { FaReact, FaNodeJs, FaPython, FaAngular, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiSpring, SiFlask, SiDjango, SiMongodb, SiPostgresql, SiMysql, SiOracle, SiBootstrap, SiGraphql } from "react-icons/si";

const techSkills = [
  { name: "React", icon: <FaReact />, percentage: 85 },
  { name: "Node.js", icon: <FaNodeJs />, percentage: 80 },
  { name: "Python", icon: <FaPython />, percentage: 75 },
  { name: "Angular", icon: <FaAngular />, percentage: 70 },
  { name: "GitHub", icon: <FaGithub />, percentage: 90 },
  { name: "Tailwind", icon: <SiTailwindcss />, percentage: 60 },
  { name: "JavaScript", icon: <SiJavascript />, percentage: 95 },
  { name: "TypeScript", icon: <SiTypescript />, percentage: 85 },
  { name: "Spring Boot", icon: <SiSpring />, percentage: 70 },
  { name: "Flask", icon: <SiFlask />, percentage: 65 },
  { name: "Django", icon: <SiDjango />, percentage: 60 },
  { name: "MongoDB", icon: <SiMongodb />, percentage: 80 },
  { name: "PostgreSQL", icon: <SiPostgresql />, percentage: 75 },
  { name: "MySQL", icon: <SiMysql />, percentage: 85 },
  { name: "Oracle", icon: <SiOracle />, percentage: 70 },
  { name: "Bootstrap", icon: <SiBootstrap />, percentage: 80 },
  { name: "GraphQL", icon: <SiGraphql />, percentage: 65 },
];

const DescriptionCard = () => {
  return (
    <div className="description_container">
      <h1>My Development Skills</h1>
      <div className="description_grid">
        {techSkills.map((tech, index) => (
          <div key={index} className="description_card">
            <div className="tech_icon">{tech.icon}</div>
            <h3>{tech.name}</h3>
            <div className="progress_bar">
              <div className="progress_fill" style={{ width: `${tech.percentage}%` }}></div>
            </div>
            <p className="progress_percentage">{tech.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptionCard;