import React from "react";
import Axios from "axios";

const CodeRegion = ({ data }) => {
  return (
    <div>
      <h1>Region : {data.nom}</h1>
      <p>Code : {data.code}</p>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const code = context.params.code;
  const url = "https://geo.api.gouv.fr";
  const data = await Axios.get(`${url}/regions/${code}`);

  return {
    props: {
      data,
    },
  };
}

export default CodeRegion;
