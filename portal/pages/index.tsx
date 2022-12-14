import * as React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import styles from "../styles/Home.module.css";
import App, { AppInitialProps } from "next/app";

const App1 = dynamic(() => import("app1/app1"), { suspense: true });

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Portal</h1>
        <React.Suspense fallback="Loading App1">
          <App1 />
        </React.Suspense>
      </main>
    </div>
  );
}

Home.getInitialProps = async () => {
  return {};
};

export default Home;