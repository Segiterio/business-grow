import styled from "styled-components";

export const FeaturesContainer = styled.div`
  width: 95%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  gap:1.5rem;

  @media screen and (min-width: 768px) {
     grid-template-columns: 1fr 1fr;
     grid-auto-flow:row;
  }

  @media screen and (min-width: 1024px) {
     grid-template-columns: 1fr 1fr 1fr;
  }
`