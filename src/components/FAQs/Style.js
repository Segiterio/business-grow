import styled from "styled-components";

export const AccordianContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins";
  & > div {
    max-width: 495px;
  }
`;

export const Question = styled.p`
  padding: 1.5rem;
  font-size: 1.125rem;
  font-family: "Poppins";
  border-radius: 20px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    background-color: #e5d4ff55;
  }
`;

export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .faq {
    background-color: #e5d4ff;
  }
`;
export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding:.5rem 1.5rem;
  font-family: "Poppins";
  position: sticky;
  top: 0rem;
  height: fit-content;
`;
export const SelectedQuestion = styled.p`
  font-size: 1.125rem;

`;

export const SelectedAnswer = styled.p`
  font-size: 1rem;
  color: gray;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 3rem 0;


  /* @media screen and (min-width: 768px) {
  justify-content:space-evenly;
  flex-direction: row;
  gap:2rem;
  } */
`;
