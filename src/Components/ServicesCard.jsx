import "./Styles.css";
import { 
  FaReact, FaDatabase, FaAngular, FaPython, FaFileCode, FaJava
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiResponsive } from "react-icons/di";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaSatelliteDish } from "react-icons/fa6";
import { SlScreenDesktop } from "react-icons/sl";

const services = [
  {
    title: "Backend Development",
    icon: FaFileCode,
    color: "#68A063",
    skills: [
      { icon: IoLogoJavascript, name: "Node.js, Express.js" },
      { icon: FaJava, name: "Java Spring Boot" },
      { icon: FaPython, name: "Flask, Django" },
      { icon: FaSatelliteDish, name: "APIs REST & GraphQL" },
    ],
  },
  {
    title: "Frontend Development",
    icon: SlScreenDesktop,
    color: "#61DBFB",
    skills: [
      { icon: IoLogoJavascript, name: "JavaScript, TypeScript" },
      { icon: FaReact, name: "React.js, Next.js" },
      { icon: FaAngular, name: "Angular" },
      { icon: DiResponsive, name: "Responsive Design" },
      { icon: RiTailwindCssLine, name: "Tailwind, Bootstrap" },
    ],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    color: "#FF9900",
    skills: [
      { icon: FaDatabase, name: "MySQL, PostgreSQL" },
      { icon: FaDatabase, name: "MongoDB, Oracle" },
    ],
  },
];

const ServicesCard = () => {
  return (
    <div className="services_container">
      <h1>My Services</h1>
      <div className="services_cards_container">
        {services.map((service, index) => (
          <div key={index} className="service_card">
            <div 
              className="service_icon" 
              style={{ borderColor: service.color, color: service.color }}
            >
              <service.icon />
            </div>
            <h3>{service.title}</h3>
            <ul className="service_list">
              {service.skills.map((skill, idx) => {
                const IconComponent = skill.icon;
                return (
                  <li key={idx} style={{ color: service.color }}>
                    <IconComponent /> {skill.name}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
