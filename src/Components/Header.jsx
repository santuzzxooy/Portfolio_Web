import './Styles.css'
import useScrollHeader from "../utils/useScrollHeader";
import foto from '../assets/foto.png'
import { IoMdArrowDropleftCircle } from "react-icons/io";

const Header = () => {

    const isScrolled = useScrollHeader();

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
                <li><label htmlFor="check_menu"><a to="/#">P.I</a></label></li>
                <li><label htmlFor="check_menu"><a to="/#">Studies</a></label></li>
                <li><label htmlFor="check_menu"><a to="#">Experience</a></label></li>
                <li><label htmlFor="check_menu"><a to="#">Projects</a></label></li>
            </ul>
        </nav>
    )
}

export default Header