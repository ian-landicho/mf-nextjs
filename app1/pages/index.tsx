import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import React from "react";

// @ts-ignore
const Button = dynamic(() => import("portal/button"), {
  ssr: true,
  suspense: true,
});

function Home() {
  console.log("This is server-side rendered! :>>");

  React.useEffect(() => {
    console.log("This is client-side rendered! :>>");
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Hello from App 1...</h1>
        <React.Suspense fallback="loading button...">
          {/* @ts-ignore */}
          <Button message="Click from app 1" />
        </React.Suspense>
      </main>
    </div>
  );
}

Home.getInitialProps = async () => ({});

export default Home;
