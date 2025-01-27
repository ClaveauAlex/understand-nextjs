import React from "react";
import { useRouter } from "next/router";
import { Layout } from "../../components/layout";
import Axios from "axios";
import Head from "next/head";

const Titre = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <Layout>
        <h1>{data.title}</h1>
        <div>
          <img src={data.pictures[0]} />
        </div>
        <p>{data.description}</p>
      </Layout>
      ;
    </>
  );
};

export const getStaticPaths = async (context) => {
  const url = "https://aqueous-meadow-07678.herokuapp.com";
  const { data } = await Axios.get(`${url}/api/posts`);
  const posts = data.data;
  const paths = posts.map((post) => ({
    params: {
      id: post._id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const url = "https://aqueous-meadow-07678.herokuapp.com";
  const id = context.params.id;
  const { data } = await Axios.get(`${url}/api/posts/${id}`);

  return {
    props: {
      data,
    },
  };
};

export default Titre;

/*Exporté par defaut parce que c'est une page et nnon un composant*/
