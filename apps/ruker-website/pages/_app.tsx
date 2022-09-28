import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { NativeBaseProvider } from "native-base";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider>
      <Head>
        <title>Welcome to ruker-website!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </NativeBaseProvider>
  );
}

export default CustomApp;
