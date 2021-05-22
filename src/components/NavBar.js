import React, { useState } from 'react'
import styled from 'styled-components'
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
        <StyledNavbar className={nav ? 'navbar active' : 'navbar'}>
            <StyledNav>
                <StyledLogo>
                    <NavLink 
                        to="/" 
                        className="logo" 
                        exact
                    >
                        <img src={logo} alt="logo mridul"/>
                        <h2>ridul</h2>
                    </NavLink>
                </StyledLogo>
                <StyledNavLinks>
                    <NavLink 
                        to="/projects" 
                        className="navlink"
                        activeClassName="navlink-active"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/blog"
                        className="navlink"
                        activeClassName="navlink-active"
                    >
                        Blog
                    </NavLink>
                    <NavLink 
                        to="/about"
                        className="navlink"
                        activeClassName="navlink-active"
                    >
                        About Me!
                    </NavLink>
                </StyledNavLinks>
            </StyledNav>
        </StyledNavbar>
    )
}


const StyledNavbar = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    height: 3.5rem;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    transition: 0.6s ease-in-out;

    @media (max-width: 400px) {
        height: 3rem;
    }

    &.active{
        box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.157);
    }
`

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 90vw;
    max-width: 1170px;

    @media (max-width: 500px) {
        width: 95vw;
    }
`

const StyledLogo = styled.div`
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
    
        img {
            width: 26px;

            @media (max-width: 400px) {
                width: 22px;
            }
        }
    
        h2 {
            font-size: 1.2rem;
            font-weight: bold;

            @media (max-width: 400px) {
                font-size: 1.1rem;
            }
        }
    }
`

const StyledNavLinks = styled.div`
    .navlink {
        font-weight: 600;
        margin: 0 5px;
        padding: 8px 14px;
        border-radius: 3px;
        text-transform: uppercase;
        font-family: "Bebas Neue";
        letter-spacing: 1px;
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 500;
        transition: 0.2s ease-in-out;

        @media (max-width: 500px) {
            padding: 4px 8px;
        }

        @media (max-width: 400px) {
            padding: 3px 6px;
            font-size: 1rem;
            margin-left: 5px;
            margin-right: 0;
        }

        &:hover {
            background-color: #023047;
            color: #fff;
        }
    }

    .navlink-active {
        color: #fff;
        background-color: #023047;
        box-shadow: 3px 6px 20px rgba(64, 149, 198, 0.336);
    }
`



export default NavBar
