import React from 'react'
import "./nav.css"
import {Link} from "react-scroll"
import { useState } from "react"

const NavBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className='header'>
            <nav className = "nav">
                <h1 className = "left-nav">
                    <h1>
                        <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={handleClick}>__daniel_</Link>
                    </h1>
                </h1>

                <ul className = "right-nav">
                    <li className="nav-link">
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={handleClick}>Home</Link>
                    </li>

                    <li className="nav-link">
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={handleClick}>About</Link>
                    </li>

                    <li className="nav-link">
                        <Link to="skills" spy={true} smooth={true} offset={-80} duration={500} onClick={handleClick}>Skills</Link>
                    </li>

                    <li className="nav-link">
                        <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} onClick={handleClick}>Projects</Link>
                    </li>

                    <li className="nav-link">
                        <Link to="contact" spy={true} smooth={true} offset={0} duration={500} onClick={handleClick}>contact</Link>
                    </li>
                </ul>

                <a href={`${window.location.href}/daniel_tran_cv.pdf`} download={true} className='download-cv'>
                    DOWNLOAD CV
                </a>
            </nav>
        </div>
  )
}

export default NavBar

