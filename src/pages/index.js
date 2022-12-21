import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Hero from "@site/src/components/Hero";
import Prose from "@site/src/components/Prose";
import Videos from "@site/src/components/Videos";
import Resources from "@site/src/components/Resources";
// import Newsletter from "@site/src/components/Newsletter";
import Footer from "@site/src/components/Footer";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Hero />
      <Prose />
      <Videos />
      <Resources />
      <Footer />
      {/* <Newsletter /> */}
      {/* <main></main> */}
    </Layout>
  );
}
