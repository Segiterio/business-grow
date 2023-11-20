import styled from "styled-components";

export const FeatureWrapper = styled.div`
  font-family: "Raleway";
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  padding: 1rem;
  border-left: 4px solid #00A9FF;
  background-color: #CDF5FD50;

`;

export const Icon = styled.div`
  border-radius: 100px;
  background-color: #CDF5FD;
  width: fit-content;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
`;
export const Para = styled.p`
  font-size: 0.875rem;
`;

export const LearnMore = styled.button`
  border: none;
  font-size: 0.875rem;
  background-color: #00A9FF;
  padding:.4rem 1rem;
  color:white;
  border-radius: 5px;
  transition: background-color 100ms ease-in-out;
  &:hover {
     background-color: #0087cc;
     cursor: pointer;
  }
`;
