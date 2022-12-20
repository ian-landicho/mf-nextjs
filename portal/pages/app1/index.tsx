import React from "react";
import dynamic from "next/dynamic";

// @ts-ignore
const App1 = dynamic(() => import("app1/app1"), { suspense: true });

export default function Index() {
  return (
    <React.Suspense fallback="Loading App1">
      <App1 />
    </React.Suspense>
  );
}
