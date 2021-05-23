import React from 'react'

const Preview = ({value}) => {
    const { id } = value

    if(!id) {
        return null
    }

    return (
        <iframe 
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen >
        </iframe>
    )
}

export default {
    name: 'youtube',
    type: 'object',
    title: 'Youtube Embed',
    fields: [
        {
            name: 'id',
            type: 'string',
            title: 'Youtube Link ID'
        }
    ],
    preview: {
        select: {
            id: 'id'
        },
        component: Preview
    }
}