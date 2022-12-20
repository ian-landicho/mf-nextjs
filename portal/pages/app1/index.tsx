import React from "react";
import dynamic from "next/dynamic";

// @ts-ignore
const App1 = dynamic(() => import("app1/app1"), { suspense: true });

export default function Index(props) {
  return (
    <React.Suspense fallback="Loading App1">
      <App1 {...props} />
    </React.Suspense>
  );
}

export const getServerSideProps = async ctx => {
  const imp = await import("app1/app1");
  console.log("imp :>> ", imp);

  const props = await imp.getServerSideProps(ctx);
  console.log("props :>> ", props);

  return props;
};
