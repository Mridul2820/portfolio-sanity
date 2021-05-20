import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client'

const Posts = () => {
    const [postData, setPostData] = useState(null)

    useEffect(() => {
        sanityClient
            .fetch(`*[_type = "post"]{
                title,
                slug,
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
                
                <div className="posts__articles">
                    <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                            <span className="">
                                <img
                                    src=""
                                    alt=""
                                    className=""
                                />
                                <span className="">
                                    <h3 className="">
                                        {}
                                    </h3>
                                </span>
                            </span>
                        </Link>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Posts
