import React from "react";
import { useContext } from "react";
import { RefsContext } from "../utils/RefsContext";
import "./Styles.css";
import Proximate from "../assets/Proximate.jpg";
import Yogurdefresa from "../assets/Yogurdefresa.png";
import { FaBriefcase, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const CareerCard = () => {
    const { ExperienceRef } = useContext(RefsContext);

    return (
        <div className="career-container" ref={ExperienceRef}>
            {/* Career Card */}
            <div className="career-card">
                <h2 className="career-title">Professional Journey</h2>

                <div className="career-section">
                    <FaGraduationCap className="career-icon" />
                    <div>
                        <h3>Early Passion</h3>
                        <p>My love for programming started in high school, where I learned the basics of C++ and Visual Basic.</p>
                    </div>
                </div>

                <div className="career-section">
                    <FaGraduationCap className="career-icon" />
                    <div>
                        <h3>Advanced Learning</h3>
                        <p>At <strong>SENA Institute</strong>, I honed my skills in advanced programming, project development, and database management.</p>
                    </div>
                </div>

                <div className="career-section">
                    <FaBriefcase className="career-icon" />
                    <div>
                        <h3>Professional Internship</h3>
                        <p>Completed a <strong>6-month internship</strong> at the <strong>University of Tolima</strong>'s Technology Management Office.</p>
                    </div>
                </div>

                <div className="career-section">
                    <FaLaptopCode className="career-icon" />
                    <div>
                        <h3>Engineering Studies & First Job</h3>
                        <p>While studying <strong>Systems Engineering</strong>, I worked at <a>Yogurdefresa</a> (2022 - Feb 2024), developing mobile apps and websites.</p>
                    </div>
                </div>

                <div className="career-section">
                    <FaBriefcase className="career-icon" />
                    <div>
                        <h3>Short Tenure at Proximate</h3>
                        <p>Worked at <a>Proximate</a> (Feb - Nov 2024), gaining valuable experience in a fast-paced environment.</p>
                    </div>
                </div>

                <div className="career-section freelance">
                    <FaLaptopCode className="career-icon" />
                    <div>
                        <h3>Current Role</h3>
                        <p>Now working as a <strong>Freelance Developer</strong>, applying my skills across various projects.</p>
                    </div>
                </div>
            </div>

            <div className="right-boxes">
                <div className="highlight-box">+6 YEARS OF EXPERIENCE</div>
                <a href="https://yogurdefresa.es/" target="_blank" rel="noopener noreferrer">
                    <img className="right-box-image" src={Yogurdefresa} alt="Yogurdefresa" />
                </a>
                <a href="https://www.proximateapps.com" target="_blank" rel="noopener noreferrer">
                    <img className="right-box-image" src={Proximate} alt="Proximate" />
                </a>
            </div>

        </div>
    );
};

export default CareerCard;
