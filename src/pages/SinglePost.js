import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import styled from 'styled-components'
import Skeleton from '../components/Skeleton';

import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => {
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
            <h1>hey</h1>
            <article>
                <header>
                    <div>
                        <div>
                            <h1>{singlePost.title}</h1>
                            <div>
                                <img
                                    src={urlFor(singlePost.authorImage).url()}
                                    alt={singlePost.name}
                                />
                            </div>
                            <p>{singlePost.name}</p>
                        </div>
                    </div>
                    <img 
                        src={singlePost.mainImage.asset.url}
                        alt={singlePost.title}
                        style={{ height: "400px" }}
                    />
                </header>
                <div>
                    <BlockContent
                        blocks={singlePost.body}
                        projectId= "k7hjtaca"
                        dataset= "production"
                    />
                </div>
            </article>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    width: 90vw;
    max-width: 1000px;
`

export default SinglePost
