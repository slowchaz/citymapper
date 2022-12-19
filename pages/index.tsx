import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from '../styles/Home.module.css'
import { CityMap } from '../components/CityMap'



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CityMapper</title>
        <meta name="description" content="Make custom city map!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>City Mapper</a>
        </h1>

        <div
          style={{
            width: "30vw",
            height: "70vh",
            position: "relative",
          }}
        >
          <CityMap />
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  );
};

export default Home;