import React from 'react'
import HomeContact from '../components/home/HomeContact'
import HomeMain from '../components/home/HomeMain'
import HomeTech from '../components/home/HomeTech'

const Home = () => {
    return (
        <div>
            <HomeMain />
            <HomeTech />
            <HomeContact />
        </div>
    )
}

export default Home
