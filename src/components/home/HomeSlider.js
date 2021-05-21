import React from 'react'
import styled from 'styled-components'

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
        autoplay: true
    };

    return (
        <StyledSlider {...settings}>
            <StyledSlide>
                <a href="https://airbnb-clone-sigma.vercel.app/">
                    <StyledSlideImg>
                        <img src={slide1} alt="Airbnb Clone" />
                    </StyledSlideImg>

                    <StyledSlideInfo>
                        <h2>Airbnb Clone</h2>
                    </StyledSlideInfo>
                </a>
            </StyledSlide>
            <StyledSlide>
                <a href="https://disney-plus-clone-gilt.vercel.app/">
                    <StyledSlideImg>
                        <img src={slide2} alt="Disney Plus Clone" />
                    </StyledSlideImg>
                    
                    <StyledSlideInfo>
                        <h2>Disney+ Clone</h2>
                    </StyledSlideInfo>
                </a>
            </StyledSlide>
            <StyledSlide>
                <a href="https://netflix-build-beta.vercel.app/">
                    <StyledSlideImg>
                        <img src={slide3} alt="Netflix Clone" />
                    </StyledSlideImg>
                    
                    <StyledSlideInfo>
                        <h2>Netflix Clone</h2>
                    </StyledSlideInfo>
                </a>
            </StyledSlide>
            <StyledSlide>
                <a href="https://music-player-mridul28.vercel.app/">
                    <StyledSlideImg>
                        <img src={slide4} alt="Music Player" />
                    </StyledSlideImg>
                    
                    <StyledSlideInfo>
                        <h2>Music Player</h2>
                    </StyledSlideInfo>
                </a>
            </StyledSlide>
            <StyledSlide>
                <a href="https://restaurant-site.vercel.app/">
                    <StyledSlideImg>
                        <img src={slide5} alt="Restaurant" />
                    </StyledSlideImg>
                    
                    <StyledSlideInfo>
                        <h2>Restaurant Page</h2>
                    </StyledSlideInfo>
                </a>
            </StyledSlide>
            <StyledSlide>
                <a href="https://google-clone-blond-one.vercel.app/">
                    <StyledSlideImg>
                        <img src={slide6} alt="Google Clone" />
                    </StyledSlideImg>
                    
                    <StyledSlideInfo>
                        <h2>Google Clone</h2>
                    </StyledSlideInfo>
                </a>
            </StyledSlide>
        </StyledSlider>
    )
}

const StyledSlider = styled(Slider) `
    width: 100%;
    border: 3px solid #333;
    margin-bottom: 50px;

    .slick-list {
        overflow: hidden !important;
    }

    ul li button {
        &::before {
            font-size: 10px;
            color: rgb(158, 158, 171);
        }
    }

    .slick-dots {
        bottom: -40px;

        li.slick-active button::before {
            color: #00b318;
        }
    }

    .slick-list {
        overflow: initial;
    }

    & > button {
        opacity: 1;
        height: 100%;
        width: 5vw;
        z-index: 1;
    }

    .slick-prev {
        left: 0;

        @media (max-width: 500px) {
            left: 5%;
        }

        &:before {
            background-color: rgba(0, 0, 0, .5);
            border-radius: 50%;
            padding: 5px;
            padding-top: 7px;
        }
    }
    .slick-next {
        right: 0;

        @media (max-width: 500px) {
            right: 5%;
        }

        &:before {
            background-color: rgba(0, 0, 0, .5);
            border-radius: 50%;
            padding: 5px;
            padding-top: 7px;
        }
    }
`

const StyledSlide = styled.div `
    position: relative;
    object-fit: cover;
    vertical-align: bottom;
`

const StyledSlideImg = styled.div `
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const StyledSlideInfo = styled.div `
    position: absolute;
    bottom: 10px;
    right: 15px;
    z-index: 1;
    background-color: rgba(0, 0, 0, .5);
    padding: 5px 10px;
    border-radius: 3px;

    h2 {
        color: #fff;
        line-height: 1.5;
    }
`


export default HomeSlider
