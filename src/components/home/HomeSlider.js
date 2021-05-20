import React from 'react'

// Carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../../assets/slide/airbnb-clone.png";
import slide2 from "../../assets/slide/disney-plus-clone.png";
import slide3 from "../../assets/slide/netflix-build.png";
import slide4 from "../../assets/slide/music-player.png";
import slide5 from "../../assets/slide/restaurant-site.png";
import slide6 from "../../assets/slide/google-clone.png";

const HomeSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };

    return (
        <Slider {...settings} className="homeslider">
            <div className="homeslider__slide">
                <a href="https://airbnb-clone-sigma.vercel.app/">
                    <div className="homeslide__img">
                        <img src={slide1} alt="Airbnb Clone" />
                    </div>

                    <div className="homeslide__info">
                        <h2>Airbnb Clone</h2>
                    </div>
                </a>
            </div>
            <div className="homeslider__slide">
                <a href="https://disney-plus-clone-gilt.vercel.app/">
                    <div className="homeslide__img">
                        <img src={slide2} alt="Disney Plus Clone" />
                    </div>
                    
                    <div className="homeslide__info">
                        <h2>Disney+ Clone</h2>
                    </div>
                </a>
            </div>
            <div className="homeslider__slide">
                <a href="https://netflix-build-beta.vercel.app/">
                    <div className="homeslide__img">
                        <img src={slide3} alt="Netflix Clone" />
                    </div>
                    
                    <div className="homeslide__info">
                        <h2>Netflix Clone</h2>
                    </div>
                </a>
            </div>
            <div className="homeslider__slide">
                <a href="https://music-player-mridul28.vercel.app/">
                    <div className="homeslide__img">
                        <img src={slide4} alt="Music Player" />
                    </div>
                    
                    <div className="homeslide__info">
                        <h2>Music Player</h2>
                    </div>
                </a>
            </div>
            <div className="homeslider__slide">
                <a href="https://restaurant-site.vercel.app/">
                    <div className="homeslide__img">
                        <img src={slide5} alt="Restaurant" />
                    </div>
                    
                    <div className="homeslide__info">
                        <h2>Restaurant Page</h2>
                    </div>
                </a>
            </div>
            <div className="homeslider__slide">
                <a href="https://google-clone-blond-one.vercel.app/">
                    <div className="homeslide__img">
                        <img src={slide6} alt="Google Clone" />
                    </div>
                    
                    <div className="homeslide__info">
                        <h2>Google Clone</h2>
                    </div>
                </a>
            </div>
        </Slider>
    )
}

export default HomeSlider
