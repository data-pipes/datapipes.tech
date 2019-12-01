import React from "react";

import Layout from "src/components/Layout/Layout"
import SEO from "src/components/seo";

import Home from "src/components/Home/Home";
import About from "src/components/About/About";
import Skills from 'src/components/Skills/Skills';
import CreativeCoding from "src/components/CreativeCoding/CreativeCoding";
import Contact from "src/components/Contact/Contact";

const IndexPage = () => (
  <Layout>
    <SEO title="Data pipes - Streamline you data pipes." />

    <Home />
    <About />
    <Skills />
    <CreativeCoding />
    <Contact />
  </Layout>
)

export default IndexPage
