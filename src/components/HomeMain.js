import React from 'react'
import homemainImg from "../assets/homemain.svg";

// Social
import facebookImg from "../assets/social/facebook.svg";
import instagramImg from "../assets/social/instagram.svg";
import twitterImg from "../assets/social/twitter.svg";
import githubImg from "../assets/social/github.svg";


const HomeMain = () => {
    return (
        <div className="homemain">
            <div className="homemain__left">
                <div className="homemain__textbox">
                    <h2>Hi, I'm Mridul</h2>
                    <h3>A Passionate Web Developer </h3>
                    <p>building Websites with HTML, CSS, JavaScript & REACT and some cool libraries and frameworks.</p>
                </div>
                <div className="homemain__social">
                    <a 
                        target="_blank" 
                        rel="noreferrer" 
                        href="https://github.com/Mridul2820"
                    >
                        <img 
                            src={githubImg} 
                            alt="Github Mridul"
                        />
                    </a>
                    <a 
                        target="_blank"  
                        rel="noreferrer" 
                        href="https://www.facebook.com/mridul.panda.754"
                    >
                        <img 
                            src={facebookImg} 
                            alt="Instagram Mridul"
                        />
                    </a>
                    <a 
                        target="_blank"  
                        rel="noreferrer" 
                        href="https://www.instagram.com/i_mridul/"
                    >
                        <img 
                            src={instagramImg} 
                            alt="Instagram Mridul"
                        />
                    </a>
                    <a 
                        target="_blank"  
                        rel="noreferrer" 
                        href="https://twitter.com/i_mridul"
                    >
                        <img 
                            src={twitterImg} 
                            alt="Twitter Mridul"
                        />
                    </a>
                </div>
            </div>
            <div className="homrmain__right">
                <img src={homemainImg} alt="Web Developer" />
            </div>
        </div>
    )
}

export default HomeMain
