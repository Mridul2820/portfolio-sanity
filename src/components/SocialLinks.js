import styled from 'styled-components'

// Social
import facebookImg from "../assets/social/facebook.svg";
import instagramImg from "../assets/social/instagram.svg";
import twitterImg from "../assets/social/twitter.svg";
import githubImg from "../assets/social/github.svg";

const SocialLinks = () => {
    return (
        <StyledSocial className="social">
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
        </StyledSocial>
    )
}

const StyledSocial = styled.div`
    display: flex;
    margin-top: 50px;

    @media (max-width: 840px) {
        margin-top: 20px;
    }

    a {
        background-color: #f0f0f0;
        border: 1px solid #888;
        margin-right: 15px;
        padding: 5px;
        border-radius: 50%;
        height: 50px;
        width: 50px;

        display: flex;
        justify-content: center;
        align-items: center;
        transition: .5s;

        @media (max-width: 400px) {
            height: 42px;
            width: 42px;
        }

        &:hover {
            box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
            background-color: #fff;
        }
    }

    img {
        width: 30px;
        opacity: .9;
        transition: .5s;

        @media (max-width: 400px) {
            width: 25px;
        }

        &:hover {
            opacity: 1;
        }
    }
`

export default SocialLinks
