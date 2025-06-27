import { useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = 
 [
  {
    "id": 1,
    "name": "Arif Hossain",
    "designation": "Urban Gardener",
    "feedback": "PlantWarden has completely transformed how I care for my indoor plants. The smart reminders and personalized tips are incredibly helpful!",
    "rating": 5,
    "image": "https://i.ibb.co/S7NkTsHg/360-F-608557356-ELc-D2pw-QO9pdu-TRL30umabzg-Jo-Qn5fnd.jpg"
  },
  {
    "id": 2,
    "name": "Tania Rahman",
    "designation": "Homeowner",
    "feedback": "I love how simple and clean the interface is. Now I never forget to water my plants!",
    "rating": 4,
    "image": "https://i.ibb.co/5W6SWpd3/istockphoto-1437816897-612x612.jpg"
  },
  {
    "id": 3,
    "name": "Nasir Uddin",
    "designation": "Botany Student",
    "feedback": "Perfect tool for anyone studying plants. I use it daily to track growth and take notes.",
    "rating": 5,
    "image": "https://i.ibb.co/dsrkpmJD/premium-photo-1689568126014-06fea9d5d341.jpg"
  },
  {
    "id": 4,
    "name": "Lubna Akter",
    "designation": "Eco Enthusiast",
    "feedback": "A fantastic app for green living! I can easily monitor all my plants in one dashboard.",
    "rating": 4,
    "image": "https://i.ibb.co/Zpq8xkzn/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.webp"
  },
  {
    "id": 5,
    "name": "Sajib Chowdhury",
    "designation": "Plant Shop Owner",
    "feedback": "My customers love PlantWarden. It's an easy recommendation for plant care beginners.",
    "rating": 5,
    "image": "https://i.ibb.co/Dgfb8FSW/images-1.jpg"
  },
  {
    "id": 6,
    "name": "Mahmuda Sultana",
    "designation": "Teacher & Hobbyist",
    "feedback": "PlantWarden makes plant care a joy. The notification system is perfect for my busy schedule.",
    "rating": 5,
    "image": "https://i.ibb.co/3Y7dB6pg/images-2.jpg"
  },
  {
    "id": 7,
    "name": "Rafiul Islam",
    "designation": "IT Professional",
    "feedback": "I never thought plant care could be this tech-savvy. Love the clean UI and features!",
    "rating": 5,
    "image": "https://i.ibb.co/TB2XGZ39/images.jpg"
  }
]


export default function UserReview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="px-4 md:px-0 py-12  bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">
       Our Community Speaks
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto ">
         At PlantWarden, we believe every plant journey matters. From first-time growers to seasoned gardeners, our users share how PlantWarden has made plant care simpler, smarter, and more joyful. Here's what they have to say.


        </p>
      </div>

      <div className="relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="pb-14"
        >
          {reviews.map((review, index) => {
            const isActive = index === activeIndex;

            return (
              <SwiperSlide key={review.id} className="flex justify-center py-7">
                <div
                  className={`
                    w-full max-w-sm p-6 rounded-3xl transition-all duration-500 ease-in-out
                    ${
                      isActive
                        ? "bg-white scale-105  blur-0 opacity-100 z-10"
                        : "bg-white scale-95 blur-xs opacity-100"
                    }
                    flex flex-col justify-between min-h-[260px]
                  `}
                >
                  <div>
                    <img
                      src={"https://i.ibb.co/bMkw7Wz4/review-Quote.png"}
                      alt=""
                    />
                    <p className="text-gray-700 mb-5">{review.feedback}</p>
                  </div>
                  <div>
                    <hr className="mb-4 border-dashed" />
                    <div className="flex items-center gap-3">
                     <div>
                          <img className="h-10 w-10 object-cover rounded-full" src={review.image} alt="" />
                     </div>
                    
                      <div>
                        <p className="font-semibold text-sm">{review.name}</p>
                        <p className="text-xs text-gray-500">{review.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom Pagination & Arrows */}
        <div className="flex md:max-w-fit w-auto   mx-auto justify-center items-center gap-4 mt-6">
          <button className="prev-btn w-fit p-2 md:p-0 md:w-14 md:h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:bg-gray-200">
            <IoArrowBackSharp />
          </button>
          <div className="custom-pagination flex md:gap-2 gap-1 min-w-fit"></div>
          <button className="next-btn w-fit p-2 md:p-0 md:w-14 md:h-10 rounded-full bg-lime-400 shadow flex items-center justify-center text-white hover:bg-lime-500">
            <IoArrowForwardSharp />
          </button>
        </div>
      </div>
    </section>
  );
}
