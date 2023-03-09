import { Fragment } from "react";
import Hero from "../components/UI/Hero"
import About from "../components/UI/About"
import Portfolio from "../components/UI/Portfolio"
import Skills from "../components/UI/Skills"
import Contact from "../components/UI/Contact"

export default function Home() {
  return (
  <Fragment>
    <Hero />
    <About />
    <Portfolio />
    <Skills />
    <Contact />
  </Fragment>
  );
}
