import { useContext } from "react";
import { RefsContext } from "../utils/RefsContext";
import './Styles.css'
import useScrollHeader from "../utils/useScrollHeader";
import foto from '../assets/foto.png'
import { IoMdArrowDropleftCircle } from "react-icons/io";

const Header = () => {
    const isScrolled = useScrollHeader();
    const { PIRef, StudiesRef, ExperienceRef, ProjectsRef } = useContext(RefsContext);

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
        document.getElementById("check_menu").checked = false; // Cierra el menú
    };

    return (
        <nav className={`header ${isScrolled ? "scrolled" : ""}`}>
            <div className='logo-container'>
                <img src={foto} alt='?' className="imgLogo" />
                <h1>Josefth Santiago Rocha</h1>
            </div>
            
            <input type="checkbox" id="check_menu" />
            <label htmlFor="check_menu" className='checkbtn'>
                <IoMdArrowDropleftCircle />
            </label>

            <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(PIRef); }}>P.I</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(StudiesRef); }}>Studies</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(ExperienceRef); }}>Experience</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(ProjectsRef); }}>Projects</a></li>
            </ul>
        </nav>
    )
}

export default Header;