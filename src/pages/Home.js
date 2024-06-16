import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";


const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
