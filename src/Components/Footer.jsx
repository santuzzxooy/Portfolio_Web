import React from 'react'
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="footer_container">
                <p>You can see this code on my <a href="https://github.com/santuzzxooy/Portfolio_Web" target="_blank"><FaGithub /> GitHub</a> repository</p>
            </div>
        </footer>
    )
}

export default Footer