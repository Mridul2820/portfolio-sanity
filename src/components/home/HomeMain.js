import React from 'react'


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
                <SocialLinks />
            </div>
            <div className="homemain__right">
                <HomeSlider />
            </div>
        </div>
    )
}

export default HomeMain
