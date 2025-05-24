import React, { use } from "react";
import "swiper/css";
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination,Scrollbar,A11y,EffectCube } from "swiper/modules";
import "swiper/css/effect-cube"






const datapromiss = fetch('/banner.json').then((res)=>res.json())


const Banner = () => {
    
    const slides = use(datapromiss)

  return (
    <div className=" ">
  

    <Swiper className="w-full mx-auto relative  "
      effect={"cube"}
      modules={[EffectCube, Navigation, Pagination]}
      cubeEffect={{
        shadow: false,
        slideShadows: false,
        shadowOffset:0,
        shadowScale: 0,
      }}
      navigation
      pagination={{ clickable: true }}
      style={{
       
      }}
    >
      {slides?.map((slide) => (
        <SwiperSlide key={slide.image_url}>
          <img 
            src={slide.image_url} 
            alt="" 
            className="  w-full object-cover"

            
          /> 

         <div className=" justify-center items-center">
         <h1 className=" absolute top-1/2 md:top-1/3 left-1/2 transform -translate-x-1/2 lg:w-250 -translate-y-1/2 md:text-2xl lg:text-5xl font-extrabold text-center text-white  ">{slide.title}</h1> 

         <p className="absolute top-1/3 md:top-11/16 lg:top-11/25 hidden md:block  left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-white  md:text-3xl opacity-90 text-center sylefont ">{slide.description}</p>
         </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default Banner;
