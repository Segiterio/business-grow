import styled from "styled-components";

export const HeroContainer = styled.div`
  display: grid;
  gap:1rem;
  max-width: 1440px;
  margin: 3rem auto;
  padding: 0 1rem;
 
   & > div {
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items:center;
     gap:2rem;
   }

  & h1 {
     font-family: "DM sans";
     font-size: 1.725rem;
     text-align: center;

     &>span {
         font-style: italic;
         font-family: "Poppins";
         color:#9896F1;
     };
  }

  @media screen and (min-width: 786px) {
    grid-template-columns: .8fr 1fr;
    & h1 {
     font-size: 2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    & h1 {
     font-size: 2.5rem;
    }
  }

`

export const Start = styled.button`
  border:none;
  background-color: #8EF6E4;
  font-size: 1.125rem;
  padding:.5rem 1.5rem;
  font-weight: 600;
  font-family:"Raleway";
  border-radius: 100px;
  width: 50%;
  color:white;
`