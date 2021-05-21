import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import styled from 'styled-components'
import Skeleton from '../components/Skeleton';

import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
const urlFor = source => {
    return builder.image(source);
}

const SinglePost = () => {
    const [singlePost, setSinglePost] = useState(null)
    const { slug } = useParams()

    useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == "${slug}"]{
                    title,
                    _id,
                    slug,
                    publishedAt,
                    mainImage{
                        asset->{
                            _id,
                            url
                        }
                    },
                    body,
                    "name": author->name,
                    "authorImage": author->image
                }`
            )
            .then((data) => setSinglePost(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!singlePost) return <Skeleton />

    console.log(singlePost);

    return (
        <StyledMain>
            <article>
                <StyledHeader>
                    <h1>{singlePost.title}</h1>
                    <div className="author">
                        <img
                            src={urlFor(singlePost.authorImage).url()}
                            alt={singlePost.name}
                        />
                        <p>{singlePost.name}</p>
                    </div>
                    <p>{new Date(singlePost.publishedAt).toDateString()}</p>
                </StyledHeader>

                <StyledImg>
                    <img 
                        src={singlePost.mainImage.asset.url}
                        alt={singlePost.title}
                    />
                </StyledImg>
                    
                <StyledContent>
                    <BlockContent
                        blocks={singlePost.body}
                        projectId= "k7hjtaca"
                        dataset= "production"
                    />
                </StyledContent>
            </article>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    width: 90vw;
    max-width: 1000px;
    padding-top: 50px;
    padding-bottom: 50px;
    margin: 0 auto;
`

const StyledHeader = styled.header`
    h1 {
        font-size: 2rem;
    }

    .author {
        margin-top: 15px;
        margin-bottom: 5px;
        display: flex;
        align-content: center;

        img {
            border-radius: 50%;
            height: 40px;
            width: 40px;
            margin-right: 10px;
        }

        p {
            font-weight: bold;
            margin: auto 0;
        }
    }
`

const StyledImg = styled.div`
    margin-top: 30px;
    margin-bottom: 50px;
    /* width: 80%; */
    height: 400px;
    overflow: hidden;

    img {
        height: 100%;
        max-height: 500px;
    }
`

const StyledContent = styled.div`

    img {
        width: 80%;
    }
`


export default SinglePost
