import React from "react";
import PriceSection from "../../components/PriceSection/index";
import Hero from "../../components/Hero/Index";
import Reviews from "../../components/Reviews/Index";
import FAQs from "../../components/FAQs/Index";
import Footer from "../../components/Footer/Index";
import About from "../../components/About/Index";
import Features from "../../components/Features/Index";
const Home = () => {
  return (
    <div className="HomePage">
      <Hero />
      <About/>
      <Features/>
      <PriceSection />
      <Reviews />
      <FAQs/>
      <Footer/>
    </div>
  );
};

export default Home;
