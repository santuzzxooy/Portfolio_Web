import './Styles.css'
import foto from '../assets/foto.png'
import { IoMdArrowDropleftCircle } from "react-icons/io";

const Header = () => {
    return (
        <nav className="header">
            <div className='logo-container'>
                <a to="#" className="logo">
                    <img src={foto} alt='?' className="imgLogo" />
                    <h1>Josefth Santiago Rocha</h1>
                </a>
            </div>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className='checkbtn'>
                <IoMdArrowDropleftCircle />
            </label>
            <ul>
                <li><a to="/#">P.I</a></li>
                <li><a to="/#">Studies</a></li>
                <li><a to="#">Experience</a></li>
                <li><a to="#">Projects</a></li>
            </ul>
        </nav>
    )
}

export default Header