import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
    return (
        <StyledPost>
            <Link to={"/post/" + post.slug.current} key={post.slug.current} >
                <StyledImg>
                    <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                    />
                </StyledImg>
                <StyledText>
                    <h3>
                        {post.title}
                    </h3>
                    <span>
                        {new Date(post.publishedAt).toDateString()}
                    </span>
                    {/* <p className="post__desc">
                        {post.body}
                    </p> */}
                </StyledText>
            </Link>
        </StyledPost>
    )
}

const StyledPost = styled.article`
    width: 100%;

    a {
        width: 100%;
    }
`

const StyledImg = styled.div`
    width: 100%;
    border-radius: 3px;
    overflow: hidden;

    img {
        width: 100%;
        object-fit: cover;
        vertical-align: bottom;
    }
`
const StyledText = styled.div`
    margin-top: 10px;
    padding-left: 10px;
    border-left: 3px solid #96e6a1;

    h3 {
        font-size: 22px;
    }
`


export default Post
