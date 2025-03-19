import "./Styles.css";
import foto from "../assets/foto.png";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const PersonalCard = () => {

  return (
    <div className="PI_card">
      <img src={foto} alt="Avatar" className="profile-img" />
      <div className="card_container">
        <h2>Josefth Rocha</h2>
        <p className="job-title">Full Stack Web Developer</p>

        <div className="info">
          <p><strong><MdEmail /> Email:</strong> santiagorochav@gmail.com</p>
          <p><strong><FaWhatsapp /> Phone Number:</strong> <a href="https://api.whatsapp.com/send?phone=573054010961" target="_blank">+57 3054010961</a></p>
          <p><strong><FaLocationDot /> Location:</strong> Ibague, Colombia</p>
          <p><strong><FaGithub /> GitHub:</strong> <a href="https://github.com/santuzzxooy" target="_blank">github.com/santuzzxooy</a></p>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;