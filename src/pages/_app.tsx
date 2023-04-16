import NavBar from "../components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head key={null}></Head>
      <div className="body">
        <NavBar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
