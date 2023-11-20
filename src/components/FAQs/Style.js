import styled from "styled-components";

export const AccordianContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  font-family: "Poppins";

  & > div {
   max-width: 495px;
  }
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
  justify-content:space-evenly;
  flex-direction: row;
  gap:2rem;
  }
`