export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'date',
            title: 'Project Date',
            type: 'datetime',
        },
        {
            name: 'screenshot',
            title: 'Screenshot',
            type: 'image'
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: 'githubRepo',
            title: 'Github Repo',
            type: 'url'
        },
        {
            name: 'netlify',
            title: 'Netlify Link',
            type: 'url'
        },
        {
            name: 'varcel',
            title: 'varcel link',
            type: 'url'
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            },
        },
    ]
}