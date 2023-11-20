import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: min(5rem, 5vw);
  margin-top: min(4rem, 4vw);
`;

export const ContentContainer = styled.div`
  width: 95%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;

  & > img {
    width: 100%;
    border-radius: 5px;
    order: 1;
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;

    & > img {
      order: 0;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
export const Heading = styled.h4`
  font-size: 1.625rem;
  font-weight: 600;
  font-family: "Poppins";
`;
export const Description = styled.p`
  font-family: "Poppins";
  line-height: 1.5;
  text-align: justify;
`;
