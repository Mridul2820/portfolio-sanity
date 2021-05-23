import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed';


const About = () => {
    return (
        <div>
            {/* <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/cy9fgZa8d90" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe> */}

            <TwitterTweetEmbed 
                tweetId="1395801614477365249"
                options={{ conversation: "none" }} 
            />
        </div>
    )
}

export default About
