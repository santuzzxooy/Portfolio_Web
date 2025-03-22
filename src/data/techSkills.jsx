import { 
  FaReact, FaNodeJs, FaPython, FaAngular, FaGithub 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiJavascript, SiTypescript, SiSpring, 
  SiFlask, SiDjango, SiMongodb, SiPostgresql, SiMysql, 
  SiOracle, SiBootstrap
} from "react-icons/si";

const techSkills = [
  { name: "React", icon: <FaReact />, percentage: 90 },
  { name: "Node.js", icon: <FaNodeJs />, percentage: 80 },
  { name: "Python", icon: <FaPython />, percentage: 75 },
  { name: "Angular", icon: <FaAngular />, percentage: 70 },
  { name: "GitHub", icon: <FaGithub />, percentage: 90 },
  { name: "JavaScript", icon: <SiJavascript />, percentage: 95 },
  { name: "TypeScript", icon: <SiTypescript />, percentage: 85 },
  { name: "Spring Boot", icon: <SiSpring />, percentage: 70 },
  { name: "Flask", icon: <SiFlask />, percentage: 65 },
  { name: "Django", icon: <SiDjango />, percentage: 90 },
  { name: "MongoDB", icon: <SiMongodb />, percentage: 80 },
  { name: "PostgreSQL", icon: <SiPostgresql />, percentage: 75 },
  { name: "MySQL", icon: <SiMysql />, percentage: 85 },
  { name: "Oracle", icon: <SiOracle />, percentage: 70 },
  { name: "Tailwind", icon: <SiTailwindcss />, percentage: 60 },
  { name: "Bootstrap", icon: <SiBootstrap />, percentage: 80 },
];

export default techSkills;