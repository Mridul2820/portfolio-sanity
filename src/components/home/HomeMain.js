import styled from 'styled-components'

import resume from '../../assets/MRIDUL.pdf';

import SocialLinks from '../SocialLinks';
import HomeSlider from './HomeSlider';

const HomeMain = () => {
    return (
        <StyledContainer>
            <StyledLeft>
                <StyledTextbox>
                    <h2>Hi, I'm Mridul</h2>
                    <h3>A Passionate Web Developer </h3>
                    <p>building Websites with HTML, CSS, JavaScript & REACT and some cool libraries and frameworks.</p>
                </StyledTextbox>
                <StyledButtons>
                    <a href="mailto:mridulpanda2820@gmail.com" className="main-button">Get In Touch</a>
                    <a 
                        target="_blank" 
                        rel="noreferrer"
                        href={resume} 
                        className="main-button"
                    >
                        See My Resume
                    </a>
                </StyledButtons>
                <SocialLinks />
            </StyledLeft>
            <StyledRight>
                <HomeSlider />
                <h3>Some of My recent Projects</h3>
            </StyledRight>
        </StyledContainer>
    )
}

const StyledContainer = styled.main`
    display: flex;
    align-items: center;
    width: 90vw;
    margin: 0 auto;
    height: 100%;
    min-height: 90vh;

    @media (max-width: 992px) {
        width: 95vw;
    }

    @media (max-width: 840px) {
        flex-direction: column;
        min-height: 100%;
    }
`

const StyledLeft = styled.div`
    width: 45%;

    @media (max-width: 840px) {
        width: 80%;
        margin: 40px;
    }

    @media (max-width: 500px) {
        width: 100%;
        padding: 0 10px;
    }
`

const StyledTextbox = styled.div`
    max-width: 90%;

    @media (max-width: 500px) {
        max-width: 100%;
    }

    h2 {
        font-size: 3rem;

        @media (max-width: 500px) {
            font-size: 2.5rem;
        }

        @media (max-width: 400px) {
            font-size: 2.2rem;
        }
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;

        @media (max-width: 500px) {
            font-size: 1.2rem;
        }

        @media (max-width: 400px) {
            font-size: 1rem;
        }
    }

    p {
        font-size: 1.2rem;

        @media (max-width: 500px) {
            font-size: 1rem;
        }

        @media (max-width: 400px) {
            font-size: .8rem;
        }
    }
`

const StyledButtons = styled.div`
    margin-top: 30px;
    display: flex;

    .main-button{
        margin-right: 20px;
        padding: 8px 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        font-family:'Lato';
        border: 2px solid #023047;
        background-color: #023047;
        box-shadow: 3px 6px 20px rgba(64, 149, 198, 0.336);
        border-radius: 5px;
        color:#ffffff;

        @media (max-width: 400px) {
            font-size: .9rem;
            margin-right: 12px;
            padding: 6px 12px;
        }
    
        &:hover{
            background-color: transparent;
            transition: all ease 0.5s;
            color: #3d2514;
        }
    }
`


const StyledRight = styled.div`
    width: 55%;
    text-align: center;

    @media (max-width: 840px) {
        width: 80%;
    }

    @media (max-width: 500px) {
        width: 100%;
        padding: 0 10px;
    }
`


export default HomeMain
