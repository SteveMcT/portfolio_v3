import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "reflect-metadata";
import "../styles/ScrollWrapper.css";
import "../styles/notion.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
