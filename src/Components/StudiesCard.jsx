import "./Styles.css";
import { useContext } from "react";
import { RefsContext } from "../utils/RefsContext";
import UT from "../assets/UT.png";
import Sena from "../assets/Sena.png";
import MisionTic from "../assets/MisionTic.png";
import DevSenior from "../assets/DevSenior.jpg";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const StudiesCard = () => {
  const { StudiesRef } = useContext(RefsContext);

  return (
    <div className="studies_container" ref={StudiesRef}>
      <h2 className="studies_title">My Studies</h2>
      <p className="studies_subtitle">Systems Engineer in Process <CiHeart /></p>

      {/* 🔥 Ahora todos los .study_item están dentro de un solo .studies_card */}
      <div className="studies_card">
        <div className="study_item">
          <a href="https://www.sena.edu.co/" target="_blank">
            <div className="study_image_container">
              <img src={Sena} alt="Study 1" />
            </div>
          </a>
          <h3>Analysis and development of information systems</h3>
          <p>Advanced programming and database management.</p>
          <p className="study_years">2020 - 2022</p>
        </div>

        <div className="study_item">
          <a href="https://colombiatic.mintic.gov.co/679/w3-propertyvalue-227490.html" target="_blank">
            <div className="study_image_container">
              <img src={MisionTic} alt="Study 2" />
            </div>
          </a>
          <h3>Web application development</h3>
          <p>Deep knowledge in React, Next.js, and UI/UX design.</p>
          <p className="study_years">2022 - 2023</p>
        </div>

        <div className="study_item">
          <a href="http://www.ut.edu.co/" target="_blank">
            <div className="study_image_container">
              <img src={UT} alt="Study 3" />
            </div>
          </a>
          <h3>Systems engineering</h3>
          <p>In Process <FaHeart /></p>
          <p className="study_years">2022 - today</p>
        </div>

        {/* 🔥 El último elemento ahora está dentro del mismo .studies_card */}
        <div className="study_item">
          <a href="https://www.devseniorcode.com/" target="_blank">
            <div className="study_image_container">
              <img src={DevSenior} alt="Study 4" />
            </div>
          </a>
          <h3>Full Stack Bootcamp</h3>
          <p>Spring boot, PostgreSQL, Angular.js, IA</p>
          <p className="study_years">2025 - 2025</p>
        </div>
      </div>
      <h3>There is much to come!!! I promise you, I promise me</h3>
    </div>
  );
};

export default StudiesCard;
