import * as React from "react";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

// @ts-ignore
const Button = dynamic(() => import("portal/button"), {
  ssr: true,
  suspense: true,
});

function Home() {
  const [count, setCount] = React.useState(0);
  console.log("This is server-side rendered! :>>");

  React.useEffect(() => {
    console.log("This is client-side rendered! :>>");
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Hello from App 1</h1>
        <React.Suspense fallback="loading button...">
          {/* @ts-ignore */}
          <Button message="Click from app 1!" />
        </React.Suspense>
        <p className={styles.description}>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </main>
    </div>
  );
}

Home.getInitialProps = async () => ({});

export default Home;
