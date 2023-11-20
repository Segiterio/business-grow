import React from "react";
import FAQData from "../../Data/faq.json";
import Accordian from "./Accordian";
import { Wrapper } from "../Header/HeaderStyle";
import { AccordianContainer, Box } from "./Style";
const FAQs = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2 className="Heading">Frequently asked questions</h2>
        <Box>
          <AccordianContainer>
            <div>
              {FAQData.map((FAQ) => {
                return <Accordian key={FAQ.id} {...FAQ} />;
              })}
            </div>
          </AccordianContainer>

          <AccordianContainer>
            <div>
              {FAQData.map((FAQ) => {
                return <Accordian key={FAQ.id} {...FAQ} />;
              })}
            </div>
          </AccordianContainer>
        </Box>
      </div>
    </Wrapper>
  );
};

export default FAQs;
