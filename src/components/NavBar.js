import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNav(true)
        }
        else {
            setNav(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <div className={nav ? 'navbar active' : 'navbar'}>
            <nav className="navbar__nav">
                <div className="navbar__logo">
                    <NavLink 
                        to="/" 
                        className="logo" 
                        exact
                    >
                        <img src={logo} alt="logo mridul"/>
                        <h2>ridul</h2>
                    </NavLink>
                </div>
                <div className="navbar__links">
                    <NavLink 
                        to="/projects" 
                        className="navbar__link"
                        activeClassName="navbar__linkActive"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/blog"
                        className="navbar__link"
                        activeClassName="navbar__linkActive"
                    >
                        Blog
                    </NavLink>
                    <NavLink 
                        to="/about"
                        className="navbar__link"
                        activeClassName="navbar__linkActive"
                    >
                        About Me!
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
