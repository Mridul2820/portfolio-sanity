import React from 'react'
import styled from 'styled-components'

import hometech from "../../assets/hometech.svg";

// Logos
import html from '../../assets/tech/html.svg'
import css from '../../assets/tech/css.svg'
import js from '../../assets/tech/js.svg'
import sass from '../../assets/tech/sass.svg'
import react from '../../assets/tech/react.svg'
import firebase from '../../assets/tech/firebase.svg'
import npm from '../../assets/tech/npm.svg'
import next from '../../assets/tech/next.svg'
import mui from '../../assets/tech/mui.svg'
import bootstrap from '../../assets/tech/bootstrap.svg'

const HomeTech = () => {
    return (
        <StyledContainer>
            <StyledLeft>
                <img src={hometech} alt="tech" />
            </StyledLeft>
            <StyledRight>
                <StyledText>
                    <h2>What I do</h2>
                    <p>Crazy Web Devloper Who Wants To make Crazy Websites</p>
                </StyledText>
                <h4>Skills</h4>
                <StyledTechs>
                    <StyledTech>
                        <img src={html} alt="html" />
                        <p>HTML5</p>
                    </StyledTech>
                    <StyledTech>
                        <img src={css} alt="css" />
                        <p>CSS3</p>
                    </StyledTech>
                    <StyledTech>
                        <img src={js} alt="js" />
                        <p>JavaScript</p>
                    </StyledTech>
                    <StyledTech>
                        <img src={sass} alt="sass" />
                        <p>SASS</p>
                    </StyledTech>
                    <StyledTech>
                        <img src={react} alt="react" />
                        <p>REACT JS</p>
                    </StyledTech>
                    <StyledTech>
                        <img src={next} alt="next" />
                        <p>Next JS</p>
                    </StyledTech>
                    <StyledTech>
                        <img src={npm} alt="npm" />
                        <p>NPM</p>
                    </StyledTech>
                    <StyledTech>
                        <img src={firebase} alt="firebase" />
                        <p>Firebase</p>
                    </StyledTech>
                    <StyledTech>
                        <img src={mui} alt="mui" />
                        <p>Material-Ui</p>
                    </StyledTech>
                    <StyledTech>
                        <img src={bootstrap} alt="bootstrap" />
                        <p>Bootstrap</p>
                    </StyledTech>
                </StyledTechs>
            </StyledRight>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    margin: 0 auto;
    padding-top: 50px;
    border-top: 3px solid #96e6a1 ;

    @media (max-width: 992px) {
        width: 95vw;
    }

    @media (max-width: 840px) {
        flex-direction: column-reverse;
        margin-top: 50px;
    }
`

const StyledLeft = styled.div`
    width: 45%;

    @media (max-width: 840px) {
        width: 80%;
        margin-top: 20px;
    }

    @media (max-width: 500px) {
        width: 100%;
        padding: 0 10px;
    }

    img {
        width: 100%;
    }
`

const StyledRight = styled.div`
    width: 55%;

    @media (max-width: 840px) {
        width: 90%;
        text-align: center;
    }

    @media (max-width: 500px) {
        width: 100%;
        padding: 0 10px;
    }

    h4 {
        font-size: 1.2rem;
        text-align: center;
    }
`

const StyledText = styled.div`
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #000;
    text-align: center;

    h2 {
        font-size: 3rem;

        @media (max-width: 500px) {
            font-size: 2.2rem;
        }
    }

    p {
        @media (max-width: 500px) {
            font-size: 1rem;
        }
    }
`

const StyledTechs = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const StyledTech = styled.div`
    width: 90px;
    height: 100px;
    margin-right: 10px;
    margin-top: 10px;
    padding: 10px;
    transition: .5s;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    &:hover {
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
    }

    img {
        width: 80%;
    }

    p {
        font-size: 12px;
        margin: 5px 0;
    }
`


export default HomeTech
