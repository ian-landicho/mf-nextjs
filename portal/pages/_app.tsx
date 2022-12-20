import App from "next/app";
import type { AppProps } from "next/app";

import "../styles/globals.css";

function _App({ Component, pageProps }: AppProps) {
  console.log("pageProps :>> ", pageProps);
  return <Component {...pageProps} />;
}

// @ts-ignore
_App.getInitialProps = async ctx => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};

export default App;
