import styled from "styled-components";

export const SideBarContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  background-color: #fff;
  z-index: 10;

  & > div:first-child {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 1rem;
  }
  
  @media screen and (min-width: 640px) {
    display: none;
  }
`;
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-left: 1rem;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  padding-top: 2rem;

  & > div {
    width: fit-content;
    border-bottom:2px solid transparent;

    &:hover {
      cursor: pointer;
      border-color: #9896f1;
    }
  }
`;
