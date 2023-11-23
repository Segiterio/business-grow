import styled from "styled-components";

export const BG = styled.div`
  background-color: ${({$BGC}) => $BGC ? $BGC : "none" };
  padding:2rem 0;
`

export const ReviewsWrapper = styled.section`
  max-width: 1280px;
  width: 95%;
  margin: 0 auto;


  & > *:last-child {
    padding: 2rem;
  }
  
  @media screen and (min-width: 640px) {
    & > *:last-child {
    padding: 3rem;
  }
  }
`;

export const ReviewCard = styled.div`
  background-color: #fff;
  padding:.8rem 1.5rem ;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  font-family: "Poppins";
  gap:1.4rem;
  justify-content:space-between;



  & > div:last-child {
     display: flex;
     gap: 1.5rem;
     align-items: center;
      
     & > img {
         width: 40px;
         height: 40px;
         object-fit: cover;
         border-radius: 50px;
         background-color: gray;
         aspect-ratio: 1/1;
     }
  }

`

export const Name = styled.p`
  font-weight: 500;
  font-size: .875rem;
`
export const Designation = styled.p`
  font-weight: 400;
  font-size: .625rem;
  color:gray;
`
export const Comment = styled.p`
  font-size:.875rem;
  color:gray;
  font-weight: 300;
`