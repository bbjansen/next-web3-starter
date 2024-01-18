import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { DefaultSeo } from "next-seo";

import { Provider as StoreProvider } from "react-redux";
import Web3Provider from "../components/Web3Provider";
import store from "../store";
import config from "../web3/config"

import "styles/global.css";

type NextPageWithLayout<Props = {}, InitialProps = Props> = NextPage<Props, InitialProps> & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <DefaultSeo
        titleTemplate="Demo - %s"
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          siteName: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <StoreProvider store={store}>
        <Web3Provider config={config}>
          {getLayout(<Component {...pageProps} />)}
        </Web3Provider>
      </StoreProvider>
      <Script src="" />
    </>
  )
};

export type { NextPageWithLayout }
export default App;

