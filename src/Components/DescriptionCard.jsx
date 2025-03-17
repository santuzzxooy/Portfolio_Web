import "./Styles.css";
import { FaJs } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { DiResponsive } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiOracle } from "react-icons/si";
import { FaSatelliteDish } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { SiSpring } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiJfrogpipelines } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiDjango } from "react-icons/si";

const DescriptionCard = () => {
  return (
    <div className="description_container">
      <div className="description_card">
        <h2>About My Developent Skills</h2>
        <p>
          I am a Full Stack Developer with extensive experience in modern web technologies,
          specializing in <strong><FaJs /> JavaScript</strong> and <strong><BiLogoTypescript /> TypeScript</strong> to build scalable and efficient applications.
          I create dynamic and responsive user interfaces using <strong><FaReact /> React.js</strong> and <strong><RiNextjsFill /> Next.js</strong>.
        </p>
        <p>
          My expertise includes <strong><DiResponsive /> Responsive Development</strong>, ensuring that applications adapt seamlessly
          across different devices and screen sizes.
        </p>
        <p>
          On the backend, I develop APIs and microservices using <strong><FaNodeJs /> Node.js</strong> and <strong><SiExpress /> Express.js</strong>,
          while also having experience with <strong><SiSpring /> Java Spring Boot</strong> for enterprise-level solutions.
        </p>
        <p>
          I manage both relational and NoSQL databases, including <strong><SiMongodb /> MongoDB, <SiPostgresql /> PostgreSQL, <GrMysql /> MySQL, and <SiOracle /> Oracle</strong>,
          optimizing performance and ensuring data integrity.
        </p>
        <p>
          In UI/UX development, I leverage <strong><RiTailwindCssLine /> Tailwind CSS</strong> and <strong><FaBootstrap /> Bootstrap</strong> to create
          visually appealing and user-friendly designs.
        </p>
        <p>
          I have hands-on experience with <strong><FaSatelliteDish /> RESTful APIs</strong> and <strong><GrGraphQl /> GraphQL</strong> for efficient data communication.
        </p>
        <p>
          My workflow includes <strong><FaGitAlt /> Git</strong> and <strong><FaGithub /> GitHub</strong>, following best practices in version control,
          along with expertise in <strong><SiJfrogpipelines /> CI/CD pipelines</strong> for automated deployments.
        </p>
        <p>
          Additionally, I have a solid background in <strong><FaPython /> Python frameworks</strong> like <strong><SiFlask /> Flask</strong> and <strong><SiDjango /> Django</strong>,
          as well as experience working with <strong><FaAngular /> AngularJS</strong> for frontend development.
        </p>
      </div>
    </div>
  );
};

export default DescriptionCard;