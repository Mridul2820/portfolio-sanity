import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
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
        <StyledMain>
            <section>
                <StyledHeader>
                    <h1>Blog Posts</h1>
                    <p>Welcome to my blog posts page!</p>
                </StyledHeader>
                
                <StyledGrid>
                {postData &&
                    postData.map((post) => (
                        <Post key={post.slug.current} post={post}/>
                    ))
                }
                </StyledGrid>
            </section>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    min-height: 85vh;
    background-color: #f0fff4;

    section {
        width: 90vw;
        margin: 0 auto;

        @media (max-width: 840px) {
            width: 95vw;
        }
    }
`

const StyledHeader = styled.main`
    text-align: center;

    h1 {
        padding-top: 20px;
        font-size: 3rem;

        @media (max-width: 500px) {
            font-size: 2rem;
        }
    }

    p {
        font-size: 1.5rem;
    }
`

const StyledGrid = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    justify-content: center;
    margin-top: 50px;
    padding-bottom: 30px;

    @media (max-width: 992px) {
        gap: 20px;
    }

    @media (max-width: 840px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 40px;
        margin-top: 20px;
    }
`


export default PostGrid
