import React from "react";
import { GetStaticProps } from "next";

import Repository from "../utils/Repository";
import Meta from "../components/Meta";
import Layout from "../components/Layout";
import Hero from "../components/Index/Hero";
import About from "../components/Index/About";
import Skills from "../components/Index/Skills";
import Works from "../components/Index/Works";

interface IndexProps {
  repos: Repository[];
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(
    "https://api.github.com/users/pshashikumar/repos?sort=updated"
  );
  const repos = await data.json();
  return {
    props: { repos },
    revalidate: 86400,
  };
};

const Index = ({ repos }: IndexProps) => (
  <>
    <Meta />
    <Layout className="mb-10 space-y-10 md:space-y-14 md:mb-20">
      <Hero />
      <About />
      <Skills />
      <Works repos={repos} />
    </Layout>
  </>
);

export default Index;
