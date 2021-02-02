import React from "react";
import Axios from "axios";
import Head from "next/head";
import { Layout } from "../../components/layout";

const CodeRegion = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.nom}</title>
      </Head>
      <Layout>
        <h1>Region : {data.nom}</h1>
        <p>Code : {data.code}</p>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const code = context.params.code;
  const url = "https://geo.api.gouv.fr";
  const { data } = await Axios.get(`${url}/regions/${code}`);

  return {
    props: {
      data,
    },
  };
};

export default CodeRegion;
