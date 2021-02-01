import React from "react";
import {Layout} from "../components/layout";
import Link from "next/link";

const PostLink = ({titre}) => {
    return (
        <li>
            <Link href={"/blog/[titre]"} as={`/blog/${titre}`}>
                <a>{titre}</a>
            </Link>
        </li>
    )
}

const Blog = () => {
    return (
        <Layout>
            <h1>Blog</h1>
            <ul>
                <PostLink titre={"react"}/>
                <PostLink titre={"angular"}/>
                <PostLink titre={"vue"}/>
                <PostLink titre={"svelte"}/>
                <PostLink titre={"apprendre Nextjs"}/>
            </ul>
        </Layout>
    )
}

export default Blog;