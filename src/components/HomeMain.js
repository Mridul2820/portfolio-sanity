import React from 'react'
import { Link } from 'react-router-dom';

// Social
import facebookImg from "../assets/social/facebook.svg";
import instagramImg from "../assets/social/instagram.svg";
import twitterImg from "../assets/social/twitter.svg";
import githubImg from "../assets/social/github.svg";

// Carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../assets/slide/airbnb-clone.png";
import slide2 from "../assets/slide/disney-plus-clone.png";
import slide3 from "../assets/slide/netflix-build.png";



const HomeMain = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };

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
            <div className="homemain__right">
                <Slider {...settings} className="homemain__slider">
                    <div className="homemain__slide">
                        <Link to="https://airbnb-clone-sigma.vercel.app/">
                            <img src={slide1} alt="" />
                        </Link>
                    </div>
                    <div className="homemain__slide">
                        <Link to="https://disney-plus-clone-gilt.vercel.app/">
                            <img src={slide2} alt="" />
                        </Link>
                    </div>
                    <div className="homemain__slide">
                        <Link to="https://netflix-build-beta.vercel.app/">
                            <img src={slide3} alt="" />
                        </Link>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default HomeMain