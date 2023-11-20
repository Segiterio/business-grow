import React from 'react'
import { ReviewsWrapper,Name,Designation,ReviewCard,Comment ,BG} from './style'
import ReviewsData from "../../Data/Reviews.json"
import { FaQuoteLeft } from "react-icons/fa6";
import { faker } from "@faker-js/faker"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Reviews = () => {
  return (
  <BG $BGC={"#9896F1"}>
    <ReviewsWrapper>
        <div className='Heading' style={{color:"white"}}>
           Read what our Customers say
        </div>
      
        <Swiper
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}

        slidesPerView={1}

        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        { ReviewsData.map(Review => (<SwiperSlide key={Review.id}>
           <ReviewCard>
              <div>
                  <FaQuoteLeft size={50} color="#8EF6E4" />
                  <Comment>{Review.comment}</Comment>
              </div>
               
               <div>
                  <img src={faker.image.avatarGitHub()} alt="gitavatars" />
                  <div>
                     <Name>{Review.user}</Name>
                    <Designation>CEO Company</Designation>
                  </div>
               </div>

           </ReviewCard>
        </SwiperSlide>))}

      </Swiper>
       
    </ReviewsWrapper>
    </BG>
  )
}

export default Reviews