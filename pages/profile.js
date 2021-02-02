import React, { useEffect, useState } from "react";
import { Layout } from "../components/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import Axios from "axios";
import Head from "next/head";

const Profile = () => {
  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: "1px solid #ddd",
  };
  const [data, setData] = useState("");
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    Axios.get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Liste des utilisateurs</title>
      </Head>
      <Layout>
        {data &&
          data.map((user) => (
            <div style={styles} key={user.id}>
              <h1>{user.name}</h1>
              <div>Email: {user.email}</div>
              <div>Telephone: {user.phone}</div>
            </div>
          ))}
      </Layout>
    </>
  );
};

export default Profile;
