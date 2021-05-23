import React from 'react'
import InstagramEmbed from 'react-instagram-embed';

const Preview = ({value}) => {
    const { id } = value

    if(!id) {
        return null
    }

    return (
        <InstagramEmbed 
            url={`https://www.instagram.com/p/${id}/`} 
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