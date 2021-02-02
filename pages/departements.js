import React from "react";
import { Layout } from "../components/layout";
import Axios from "axios";
import Head from "next/head";

const Departement = ({ data }) => {
  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: "1px solid #ddd",
  };
  return (
    <>
      <Head>
        <title>Liste des départements</title>
      </Head>
      <Layout>
        {data.map((departement) => (
          <div style={styles} key={departement.code}>
            <h1>{departement.nom}</h1>
            <div>Code de département : {departement.code}</div>
            <div>Code de la Région : {departement.codeRegion}</div>
          </div>
        ))}
      </Layout>
    </>
  );
};

Departement.getInitialProps = async (context) => {
  const url = "https://geo.api.gouv.fr/departements";
  const { data } = await Axios.get(url);

  return {
    data,
  };
};

export default Departement;
