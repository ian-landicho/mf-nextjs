import * as React from "react";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

// TODO: Resolve types definition for dynamic import
// @ts-ignore
const Button = dynamic(() => import("portal/button"), {
  ssr: true,
  suspense: true,
});

function Home({ data }: { data: { name: string } }) {
  const [count, setCount] = React.useState(0);

  console.log("This is server-side rendered! :>>", data);

  React.useEffect(() => {
    console.log("This is client-side rendered! :>>");
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{`Hello, ${data?.name} from App 1`}</h1>
        <React.Suspense fallback="loading button...">
          {/* TODO: Resolve types definition for dynamic import */}
          {/* @ts-ignore */}
          <Button message="Click from app 1!" />
        </React.Suspense>
        <p className={styles.description}>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://swapi.dev/api/people/1/");
  const data = await response.json();

  console.log("data", data);

  return {
    props: {
      data,
    },
  };
}

export default Home;
