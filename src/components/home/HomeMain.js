import React from 'react'

import resume from '../../assets/MRIDUL.pdf';

import SocialLinks from '../SocialLinks';
import HomeSlider from './HomeSlider';

const HomeMain = () => {
    return (
        <div className="homemain">
            <div className="homemain__left">
                <div className="homemain__textbox">
                    <h2>Hi, I'm Mridul</h2>
                    <h3>A Passionate Web Developer </h3>
                    <p>building Websites with HTML, CSS, JavaScript & REACT and some cool libraries and frameworks.</p>
                </div>
                <div className="homemain__buttons">
                    <a href="mailto:mridulpanda2820@gmail.com" className="homemain__button">Get In Touch</a>
                    <a 
                        target="_blank" 
                        rel="noreferrer"
                        href={resume} 
                        className="homemain__button"
                    >
                        See My Resume
                    </a>
                </div>
                <SocialLinks />
            </div>
            <div className="homemain__right">
                <HomeSlider />
                <h3>Some of My recent Projects</h3>
            </div>
        </div>
    )
}

export default HomeMain
