import React from "react";
import { Layout } from "../components/layout";
import Axios from "axios";
import Link from "next/link";
import Head from "next/head";

const Home = ({ data }) => {
  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: "1px solid #ddd",
  };
  return (
    <>
      <Head>
        <title>Liste des régions</title>
      </Head>
      <Layout>
      {data.map((region) => (
        <div style={styles} key={region.code}>
          <Link href="/region/[code]" as={`/region/${region.code}`} passHref>
            <h1>{region.nom}</h1>
          </Link>
          <p>{region.code}</p>
        </div>
      ))}
    </Layout>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const url = "https://geo.api.gouv.fr";
  const { data } = await Axios.get(`${url}/regions`);

  return {
    props: {
      data,
    },
  };
}

export default Home;
