import React from 'react'
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
        <div className="hometech">
            <div className="hometech__left">
                <img src={hometech} alt="what i do" />
            </div>
            <div className="hometech__right">
                <div className="hometech__text">
                    <h2>What I do</h2>
                    <h3>Crazy Web Devloper Who Wants To make Crazy Websites</h3>
                </div>
                <h4>What Tech I Use</h4>
                <div className="hometech__techs">
                    <div className="hometech__tech">
                        <img src={html} alt="html" />
                        <p>HTML5</p>
                    </div>
                    <div className="hometech__tech">
                        <img src={css} alt="css" />
                        <p>CSS3</p>
                    </div>
                    <div className="hometech__tech">
                        <img src={js} alt="js" />
                        <p>JavaScript</p>
                    </div>
                    <div className="hometech__tech">
                        <img src={sass} alt="sass" />
                        <p>SASS</p>
                    </div>
                    <div className="hometech__tech">
                        <img src={react} alt="react" />
                        <p>REACT JS</p>
                    </div>
                    <div className="hometech__tech">
                        <img src={next} alt="next" />
                        <p>Next JS</p>
                    </div>
                    <div className="hometech__tech">
                        <img src={npm} alt="npm" />
                        <p>NPM</p>
                    </div>
                    <div className="hometech__tech">
                        <img src={firebase} alt="firebase" />
                        <p>Firebase</p>
                    </div>
                    <div className="hometech__tech">
                        <img src={mui} alt="mui" />
                        <p>Material-Ui</p>
                    </div>
                    <div className="hometech__tech">
                        <img src={bootstrap} alt="bootstrap" />
                        <p>Bootstrap</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTech
