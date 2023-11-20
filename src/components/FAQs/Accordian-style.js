import styled from "styled-components";

export const Answer = styled.p`
  padding: .4rem 1rem;
  text-indent: 40px;
  background-color: #F2FFE9;
  color:gray;
  font-size: .875rem;
`;

export const Question = styled.p`
   
`;

export const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  gap:1rem;
  padding: 1rem;
  background-color: #fafafa;
  & > div {
     display: flex;
     align-items: center;
  }
`