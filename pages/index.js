import { Fragment } from "react";
import Hero from "../components/UI/Hero"
import About from "../components/UI/About"
import Portfolio from "../components/UI/Portfolio"
import Skills from "../components/UI/Skills"
import Contact from "../components/UI/Contact"
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
      </Head>
    </div>
  <Fragment>
    <Hero />
    <About />
    <Portfolio />
    <Skills />
    <Contact />
  </Fragment>
  );
}
