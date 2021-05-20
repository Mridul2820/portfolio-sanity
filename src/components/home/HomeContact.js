import React from 'react'
import SocialLinks from '../SocialLinks'
import contact from '../../assets/contact.svg'

const HomeContact = () => {
    return (
        <div className="homecontact">
            <div className="homecontact__left">
                <div className="homecontact__text">
                    <h2>Contact Me ☎️</h2>
                    <p>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
                    <h3>Main : contact@mridul.tech</h3>
                </div>
                <SocialLinks />
            </div>
            <div className="homecontact__right">
                <img src={contact} alt="contact" />
            </div>
        </div>
    )
}

export default HomeContact
