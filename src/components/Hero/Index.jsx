import React from "react";
import HeroSectionImage from "../../assets/Business-Growth-1.jpg";
import { HeroContainer } from "./style";

const Hero = () => {
  return (
    <HeroContainer>
      <div>
        <h1>
          Boost Your <span>Business</span> <br /> With Our <span>Services</span>
        </h1>
      </div>
      <img src={HeroSectionImage} width={"100%"} alt="growing-bussiness"/>
    </HeroContainer>
  );
};

export default Hero;