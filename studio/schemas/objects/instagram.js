import React from 'react'
import InstagramEmbed from 'react-instagram-embed';

const Preview = ({ value }) => {
    const { id } = value

    if(!id) {
        return null
    }

    return (
        <InstagramEmbed 
            url={`https://instagr.am/p/${id}/`} 
            clientAccessToken={`${process.env.REACT_APP_FB_APP_ID}|${process.env.REACT_APP_ACCESS_TOCKEN}`}
        />
    )
}

export default {
    name: 'instagram',
    type: 'object',
    title: 'Instagram Embed',
    fields: [
        {
            name: 'id',
            type: 'string',
            title: 'Instagram post ID'
        }
    ],
    preview: {
        select: {
            id: 'id'
        },
        component: Preview
    }
}