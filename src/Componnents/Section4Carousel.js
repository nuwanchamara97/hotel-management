import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 

export default function Section4Carouselfunction() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay:true,
      };
  return (
    <div>
        <Slider {...settings}>

          
          <div>
          <img className='w-[35rem]' src="https://www.slithm.edu.lk/wp-content/uploads/2022/01/short_courses.jpg" alt="" />
          <h1 className='text-3xl font-semibold px-[8rem]'>Apprenticeship Courses</h1>
          <p className='pr-[10rem] pl-[5rem] text-center'>Our Apprenticeship Courses are designed to offer hands-on experience within an array of specialized areas for the students, in order to advance their skills further. Enroll in our short courses and expand your horizons!</p>
          </div>
          <div>
            <img className='w-[35rem]' src="https://www.slithm.edu.lk/wp-content/uploads/2022/01/tailor_courses.png" alt="" />
            <h1 className='text-3xl font-semibold px-[8rem]'>Tailor Made Courses</h1>
            <p className='pr-[10rem] pl-[5rem] text-center'>SLITHM design any tailor made courses base on the clients requirement by occupying skills of our academic experts.</p>
          </div>
          <div>
            <img className='w-[35rem]' src="	https://www.slithm.edu.lk/wp-content/uploads/2022/01/travel_and_tourism.jpg" alt="" />
            <h1 className='text-3xl font-semibold px-[8rem]'>Travel and Tourism</h1>
            <p className='pr-[10rem] pl-[5rem] text-center'>As Sri Lanka is a tourism hotspot this industry is a widely sought-after field as it holds many perspectives in terms of career. Engaging in any one of our travel and tourism courses will indefinitely give students an opportunity to put their best step forward!</p>
          </div>
         
          
        </Slider>
      </div>
  )
}
