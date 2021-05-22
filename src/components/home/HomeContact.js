import React from 'react'
import styled from 'styled-components';
import SocialLinks from '../SocialLinks'
import contact from '../../assets/contact.svg'

const HomeContact = () => {
    return (
        <StyledContainer>
            <StyledLeft>
                <StyledText>
                    <h2>Contact Me ☎️</h2>
                    <p>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
                    <h3>Main : contact@mridul.tech</h3>
                </StyledText>
                <SocialLinks />
            </StyledLeft>
            <StyledRight>
                <img src={contact} alt="contact" />
            </StyledRight>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    width: 90vw;
    margin: 50px auto;
    padding-top: 50px;
    height: 100%;
    border-top: 3px solid #96e6a1 ;

    @media (max-width: 992px) {
        width: 95vw;
    }

    @media (max-width: 840px) {
        flex-direction: column;
        min-height: 100%;
    }

    @media (max-width: 400px) {
        padding-top: 10px;
        margin-top: 30px;
    }
`

const StyledLeft = styled.div`
    width: 55%;

    @media (max-width: 840px) {
        width: 80%;
        margin: 40px;
    }

    @media (max-width: 500px) {
        width: 100%;
        padding: 0 10px;
        text-align: center;

        .social {
            justify-content: center;
        }
    }
`

const StyledRight = styled.div`
    width: 45%;

    @media (max-width: 840px) {
        width: 80%;
    }

    @media (max-width: 500px) {
        width: 100%;
        padding: 0 10px;
    }

    img {
        width: 100%;
    }
`
const StyledText = styled.div`
    h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;

        @media (max-width: 400px) {
            font-size: 2.2rem;
        }
    }

    p {
        @media (max-width: 400px) {
            font-size: 14px;
        }
    }

    h3 {
        margin-top: 10px;
    }
`


export default HomeContact
