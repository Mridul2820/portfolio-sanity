import React from 'react'
import hometech from "../../assets/hometech.svg";

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
            </div>
        </div>
    )
}

export default HomeTech
