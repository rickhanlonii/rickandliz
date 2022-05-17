import "../public/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-full w-full">
      <Head>
        <title>Rick and Liz</title>
        <meta name="description" content="Rick and Liz" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/luj6lfw.css" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
