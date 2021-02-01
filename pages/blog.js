import React from "react";
import {Layout} from "../components/layout";
import Link from "next/link";
import {useRouter} from "next/router";

const PostLink = ({titre}) => {
    return (
        <li>
            <Link href={`/blog?titre=${titre}`}>
                <a>{titre}</a>
            </Link>
        </li>
    )
}

const Blog = () => {
    const router = useRouter();
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
            <h1>{router.query.titre}</h1>
        </Layout>
    )
}

export default Blog;