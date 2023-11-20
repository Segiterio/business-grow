import styled from "styled-components";

export const PriceCardContainer = styled.div`
  width: 95%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  padding-top: 1rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    padding-top: 2rem;
    gap: 2rem;
  }
`;

export const PriceCard = styled.div`
  position: relative;
  overflow: hidden;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: scale 100ms linear;
  background: ${({ $recommended }) => {
    return $recommended
      ? "linear-gradient(0deg, rgba(63,94,251,1) 0%, rgba(70,181,252,1) 100%);"
      : "#f4f5f6";
  }};
  color: ${({ $recommended }) => {
    return $recommended ? "white" : "black";
  }};
  &:hover {
    scale: 1.02;
  }
`;

export const Badge = styled.div`
  position: absolute;
  font-size: 0.625rem;
  right: 0;
  top: 0;
  padding: 0.5rem 0.8rem;
  background: #5dfdcb;
  font-family: "Poppins";
  color: gray;
  font-weight: 500;
`;

export const Title = styled.h3`
  font-family: "Poppins";
  font-size: 1.125rem;
`;

export const Benefits = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: .5rem;
  font-size: 0.625rem;
  font-family: "Poppins";
  & > div:first-child {
    aspect-ratio: 1/1;
    height: 1rem;
    width: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 4px;
  }

  @media screen and (min-width: 640px) {
    font-size: 0.825rem;
    margin-top: 1rem;
    & > div:first-child {
      top: 0;
    }
  }
`;
export const Price = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  font-family: "DM sans", sans-serif;
  margin-bottom: 0.8rem;
  & > span {
    font-size: 0.875rem;
  }
`;

export const Btn = styled.button`
  width: 100%;
  text-align: center;
  padding: 0.5rem 1rem;
  border: none;
  font-family: "Poppins";
  border-radius: 5px;
  margin-top: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: #fff;
`;
