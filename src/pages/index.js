import React from "react";

import Layout from "src/components/Layout/Layout"
import SEO from "src/components/seo";

import Home from "src/components/Home/Home";

const IndexPage = () => (
  <Layout>
    <SEO title="Data pipes - Streamline you data pipes." />
    <Home />
  </Layout>
)

export default IndexPage
