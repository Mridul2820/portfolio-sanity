import React from 'react'

// Social
import facebookImg from "../assets/social/facebook.svg";
import instagramImg from "../assets/social/instagram.svg";
import twitterImg from "../assets/social/twitter.svg";
import githubImg from "../assets/social/github.svg";

const SocialLinks = () => {
    return (
        <div className="social">
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
    )
}

export default SocialLinks
