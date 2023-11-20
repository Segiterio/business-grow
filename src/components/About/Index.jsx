import React from "react";
import { Content, ContentContainer, Heading, Description,AboutWrapper } from "./Style";
import ImagesOfContent from "../../assets/download.jpeg";

const About = () => {
  return (
    <div>
      <h2 className="Heading">Lorem ipsum dolor sit.</h2>
      <AboutWrapper>
        <ContentContainer>
          <Content>
            <Heading>Lorem ipsum dolor sit amet.</Heading>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              asperiores vero quod earum qui vel sed veniam quidem? Voluptate
              libero expedita tempore. Debitis, mollitia magni architecto vitae
              nobis perspiciatis at!
            </Description>

            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              asperiores vero quod earum qui vel sed veniam quidem Debitis, mollitia magni architecto vitae
              nobis perspiciatis at!
            </Description>
          </Content>
          <img src={ImagesOfContent} alt="view" />
        </ContentContainer>

        <ContentContainer>
          <img src={ImagesOfContent} alt="view" />
          <Content>
            <Heading>Lorem ipsum dolor sit amet.</Heading>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              asperiores vero  Voluptate libero expedita tempore. Debitis, mollitia magni architecto vitae
              nobis perspiciatis at!
            </Description>

            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              asperiores vero quod earum qui vel sed veniam quidem? Voluptate
              libero expedita tempore. 
            </Description>
          </Content>
        </ContentContainer>

        <ContentContainer>
          <Content>
            <Heading>Lorem ipsum dolor sit amet.</Heading>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              asperiores vero quod earum qui vel sed veniam quidem? Voluptate
              libero expedita tempore. 
            </Description>

            <Description>
              Lorem ipsum dolor Non
              asperiores vero quod earum qui vel sed veniam quidem? Voluptate
              libero expedita tempore. Debitis, mollitia magni architecto vitae
              nobis perspiciatis at!
            </Description>
          </Content>
          <img src={ImagesOfContent} alt="view" />
        </ContentContainer>
      </AboutWrapper>
    </div>
  );
};

export default About;
