import React from "react";
import {Layout} from "../components/layout";
import Link from "next/link";

const Blog = () => {
    return (
        <Layout>
            <h1>Blog</h1>
            <ul>
                <li>
                    <Link href={"/blog/[titre]"} as={"/blog/react"}>
                        <a>React</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/blog/[titre]"} as={"/blog/angular"}>
                        <a>Angular</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/blog/[titre]"} as={"/blog/vue"}>
                        <a>Vue</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/blog/[titre]"} as={"/blog/svelte"}>
                        <a>Svelte</a>
                    </Link>
                </li>
            </ul>
        </Layout>
    )
}

export default Blog;