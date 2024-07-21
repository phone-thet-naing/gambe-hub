import { Card, CardHeader, CardBody, CardFooter, Heading, Text, HStack, Select, Button, Link, Input } from '@chakra-ui/react'
import usePosts from "./hooks/usePosts"
import { useEffect, useState } from 'react'
import { BsArrow90DegLeft, BsArrowLeftCircle } from 'react-icons/bs';
import React from 'react';
import { useInView } from "react-intersection-observer";

const PostList = () => {
    const { ref, inView } = useInView();
    const LIMIT = 15;
    const { data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage, isSuccess } = usePosts({ LIMIT })

    console.log("inView value: ", inView)

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage, hasNextPage])

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>An error due to {error.message} </p>

    const content =
        isSuccess &&
        data.pages.map((page) =>
            page.map((post, i) => {
                if (page.length == i + 1) {
                    return (
                        <div
                            ref={ref}
                            style={{
                                border: "solid 1px grey",
                                padding: "4px 8px",
                                borderRadius: "4px"
                            }}
                            key={post.id}>
                            {post.title}
                        </div>
                    )
                }
                return (
                    <div
                        style={{
                            border: "solid 1px grey",
                            padding: "4px 8px",
                            borderRadius: "4px"
                        }}
                        key={post.id}>
                            {post.id}. 
                        {post.title}
                    </div>
                )
            }))

    return (
        <>
            {content}
            <div>
                {isFetchingNextPage && <p>Loading...</p>}
                {/* {!hasNextPage && <p>No more data!</p>} */}
            </div>
            {/* <HStack marginTop='10px' marginLeft='10px'>
                <Button
                    isDisabled={isFetchingNextPage}
                    onClick={() => fetchNextPage()}
                >
                    {isFetchingNextPage ? 'Loading...' : 'Loading'}
                </Button>
            </HStack> */}
        </>
    )
}

export default PostList