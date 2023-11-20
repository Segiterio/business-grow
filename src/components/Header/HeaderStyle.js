import styled from "styled-components";

export const Wrapper = styled.div`
  border-bottom: ${({ $border }) => ($border ? "4px solid #9896f1" : "none")};
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  width: 95%;
  max-width: 1440px;
  margin: 0 auto;

  & > div:first-child {
    font-size: 1.75rem;
    font-weight: 900;
    font-family: "DM Sans";
  }
`;

export const Nav = styled.nav`
  display: none;
  gap: min(5vw, 4rem);
  align-items: center;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  @media screen and (min-width: 640px) {
    display: flex;
  }

  & > div {
    border-bottom: 2px solid transparent;
    padding-bottom: 2px;
  }

  & > div:hover {
    cursor: pointer;
    border-color: #9896f1;
  }
`;

export const Ham = styled.div`
  display: block;
  & > *:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 640px) {
    display: none;
  }
`;
