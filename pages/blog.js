import React from "react";
import { Layout } from "../components/layout";
import Link from "next/link";
import Axios from "axios";
import Head from "next/head";

const Blog = ({ posts }) => {
  const styles = {
    main: {
      padding: 20,
      margin: 20,
      borderBottom: "1px solid #ddd",
    },
    img: {
      height: 200,
      width: 300,
    },
  };
  return (
    <>
      <Head>
        <title>Liste des blogs</title>
      </Head>
      <Layout>
        {posts.map((post) => {
          <div style={styles.main} key={post._id}>
            <h1>{post.title}</h1>
            <Link href="/blog/[id]" as={`/blog/${post._id}`} passHref>
              <div>
                <img src={post.pictures[0]} style={styles.img} />
              </div>
            </Link>
            <div>{post.body}</div>
          </div>;
        })}
      </Layout>
    </>
  );
};

export const getStaticProps = async (context) => {
  const url = "https://aqueous-meadow-07678.herokuapp.com";
  const { data } = await Axios.get(`${url}/api/posts`);
  const posts = data.data;

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
