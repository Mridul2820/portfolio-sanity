import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Preview = ({value}) => {
    const { id } = value

    if(!id) {
        return null
    }

    return (
        <TwitterTweetEmbed 
            tweetId={id} 
            options={{ conversation: "none" }} 
        />
    )
}

export default {
    name: 'twitter',
    type: 'object',
    title: 'Twitter Embed',
    fields: [
        {
        name: 'id',
        type: 'string',
        title: 'Twitter tweet id'
        }
    ],
    preview: {
        select: {
            id: 'id'
        },
        component: Preview
    }
}