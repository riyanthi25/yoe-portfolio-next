import { Fragment } from "react";
import Hero from "@/components/UI/Hero";
import About from "@/components/UI/About";
import Portfolio from "@/components/UI/Portfolio";

export default function Home() {
  return (
  <Fragment>
    <Hero />
    <About />
    <Portfolio />
  </Fragment>
  );
}
