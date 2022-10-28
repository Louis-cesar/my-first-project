import Head from "next/head";
import Image from "next/image";
import Banner from "../comps/banner/banner";
import Navbar from "../comps/navbar/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tekswipe</title>
      </Head>
      <Navbar Login="Login" />

      <Banner title="Tekswipe Company" subtitle="We are the best!" />
    </div>
  );
}
