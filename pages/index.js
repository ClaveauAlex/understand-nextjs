import React from "react";
import { Layout } from "../components/layout";
import Axios from "axios";

const Home = ({ data }) => {
  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: "1px solid #ddd"
  }
  return (
    <Layout>
      {data.map((region) => (
        <div style={styles}>
          <h1>{region.nom}</h1>
          <p>{region.code}</p>
        </div>
      ))}
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const url = "https://geo.api.gouv.fr";
  const { data } = await Axios.get(url + "/regions");

  return {
    props: {
      data,
    },
  };
}

export default Home;
