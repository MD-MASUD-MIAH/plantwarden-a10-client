import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const PlantsFe = () => {

  const {isDark} = use(AuthContext)
  return (
    <div
    
      style={
    isDark
      ? {
        
        }
      : {  backgroundImage:
            "url(https://i.ibb.co/C3jdFrnd/Flux-Dev-highresolution-stock-photo-of-A-calm-naturalthemed-ba-3.jpg)",}
  }

      className="bg-cover bg-no-repeat overflow-hidden"
    >
      <div className="py-10 md:py-20">
        <div>
          <h1 className="text-center pt-10 text-2xl md:text-4xl font-bold sylefont">
            Better Plant Care, Made Simple
          </h1>

          <p className={` mt-3 text-center text-xs ${isDark ? "text-white":"text-gray-900"}`}>
            Taking care of your plants has never been easier. Our system helps
            you monitor your plants’ health,
            <br /> watering schedule, fertilizing, and other care tasks with
            simple, timely reminders and easy-to-follow guidance.
          </p>
        </div>

        <div className="w-11/12 mx-auto pb-10 md:pb-50 mt-12 px-4 flex flex-col-reverse md:flex-row gap-9 md:gap-10 items-center">
          {/* Left Text Section */}
          <div className="space-y-4 md:w-[50%]">
            <p className=" font-semibold">Make it easy.</p>
            <h2 className="text-3xl font-bold sylefont">
              Helping Your Plants Grow Strong
            </h2>
            <p className={`  ${isDark ? "text-white":"text-gray-900"}`}>
              “We are here to help your plants grow healthy and strong with
              simple and practical advice. Whether it’s reminding you when to
              water, how to fertilize, or protect from pests, we guide you every
              step of the way. With easy-to-follow tips and useful tools, taking
              care of your plants becomes fun and stress-free. Watch your plants
              thrive and flourish like never before!”
            </p>
          </div>

          {/* Right Image Section */}
          <div className="relative group md:w-[50%] md:py-0 py-20">
            <img
              src="https://i.ibb.co/60pYZSmP/90912360.jpg"
              alt="Vases"
              className="w-full rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
            />

            <img
              src="https://i.ibb.co/Tx4ZXQ1Z/Outdoor-Fiddle-Leaf-Fig-1024x768-1.jpg"
              alt="Vase with Flower"
              className="absolute left-1/2 top-1/2 w-2/3 rounded-lg shadow-xl
              transform -translate-x-1/2 translate-y-10 z-10
              transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantsFe;
