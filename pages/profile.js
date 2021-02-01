import React from "react";
import {Layout} from "../components/layout";
import Link from "next/link";
import {useRouter} from "next/router";

const NameLink = ({nom}) => {
    return (
        <li>
            <Link href={`/profile?titre=${nom}`}>
                <a>{nom}</a>
            </Link>
        </li>
    )
}

const Profile = () => {
    const router = useRouter();
    return (
        <Layout>
            <h1>Profile</h1>
            <ul>
                <NameLink nom="John Doe" />
                <NameLink nom="Paul" />
                <NameLink nom="Jean" />
            </ul>
            <h1>{router.query.nom}</h1>
        </Layout>
    )
}

export default Profile;