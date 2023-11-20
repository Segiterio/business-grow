import styled from "styled-components";

export const FooterContainer = styled.footer`
  & > div:first-child {
    display: grid;
    grid-template-columns: 1fr;
    padding-bottom: 1rem;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  & > div:last-child {
    padding-top: 1rem;
  }
`;

export const NewsLetterContainer = styled.div`
  padding: 1rem;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: initial;
  }
`;

export const Input = styled.input`
  min-height: 50px;
  max-width: 200px;
  padding: 0 1rem;
  color: gray;
  font-size: 15px;
  border: 1px solid #9896f1;
  border-radius: 6px 0 0 6px;
  background-color: transparent;
  font-family: "Poppins";

  &:focus-visible {
    border-color: #3898ec;
    outline: none;
  }
`;

export const SubscribeBtn = styled.button`
  min-height: 50px;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0 6px 6px 0;
  background-color: #9896f1;
  color: #fff;
  font-size: 15px;
  font-family: "Poppins";
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #5e5dcd;
  }

  @media screen and (min-width: 768px) {
    padding: 0.6rem 1.2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const LetterDescription = styled.p`
  font-size: 1.125rem;
  font-family: "Poppins";
  max-width: 45ch;
`;

export const ContactInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding-left: 5vw;
  }
`;
export const Heading = styled.h3`
  font-size: 1.875rem;
  font-family: "DM sans";
`;
export const SubHeading = styled.p`
  font-size: 1.125rem;
  font-family: "Poppins";
  text-align: ${({ $align }) => $align};
  border-bottom: ${({ $border }) => ($border ? "2px solid #9896f1" : "none")};
  width: fit-content;
`;

export const QuickLink = styled.p`
  font-size: 0.875rem;
  font-family: "Raleway";
  width: fit-content;
  cursor: pointer;
  font-weight: 500;
  opacity: 80%;
  &:hover {
    text-decoration: underline;
  }
`;
export const LinkContainer = styled.div`
  padding: 0.4rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FooterLinksContainer = styled.div`
  background-color: #efefef;
  padding-bottom: 1rem;
  & > div:first-child {
    display: flex;
    gap: 1.4rem;
    flex-wrap: wrap;
    justify-content: space-between;

    @media screen and (min-width: 640px) {
      justify-content: space-evenly;
    }
  }
`;

export const SocialLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LegalInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "DM sans";
`;
