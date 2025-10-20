import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import FeaturedProject from "./components/FeaturedProject";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Cta from "./components/Cta";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedProject />
        <Portfolio />
        <Cta /> {}
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
