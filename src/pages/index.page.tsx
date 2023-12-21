import { NextSeo } from "next-seo";

import { APP_HOST_NAME } from "../shared/constants";

import { NextPageWithLayout } from "./_app.page"

const Root: NextPageWithLayout = function Root() {
  return <NextSeo title="App" openGraph={{ url: APP_HOST_NAME }} />;
};

export default Root;
