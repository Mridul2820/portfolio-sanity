import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
    return (
        <article className="post" >
            <Link to={"/post/" + post.slug.current}  >
                <div className="post__image">
                    <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                    />
                </div>
                <div className="post__text">
                    <h3 className="post__title">
                        {post.title}
                    </h3>
                    <span className="post__date">
                        {post.publishedAt}
                    </span>
                    {/* <p className="post__desc">
                        {post.body}
                    </p> */}
                </div>
            </Link>
        </article>
    )
}

export default Post
