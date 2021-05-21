import React, { useEffect, useState } from 'react'
import sanityClient from '../client.js'
import Post from '../components/postgrid/Post'

const PostGrid = () => {
    const [postData, setPostData] = useState(null)

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                publishedAt,
                body,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setPostData(data))
            .catch(console.error);
    }, [])

    return (
        <main className="posts">
            <section className="posts__section">
                <div className="posts__header">
                    <h1>Blog Posts</h1>
                    <p>Welcome to my blog posts page!</p>
                </div>
                
                <div className="posts__grid">
                {postData &&
                    postData.map((post) => (
                        <Post key={post.slug.current} post={post}/>
                    ))
                }
                </div>
            </section>
        </main>
    )
}

export default PostGrid
