import React from 'react';
import { FaTint, FaSun, FaBug, FaLeaf, FaTemperatureHigh } from 'react-icons/fa';
import MyLottie from './MyLottie';






const PlantCareTips = () => {
  return (
     <div>
            
<div className="flex flex-col w-11/12 mx-auto md:w-full md:flex-row items-center justify-between md:bg-gradient-to-br from-[#e9fdf1] via-[#d1f7e1] to-[#2ecc71]/20">
 
  <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center md:justify-end h-80 md:h-[500px]">
    <div className="flex flex-col justify-end h-full">
      <MyLottie />
    </div>
  </div>

 
  <div className="md:w-1/2 text-center md:text-left">
    <h2 className="text-green-600 text-lg font-medium">Welcome</h2>
    <h1 className="text-3xl font-bold mt-2 mb-4 sylefont ">Simple Plant Care Tips</h1>
    <p className="text-gray-600 text-xs mb-6 md:w-[50%]">
      Taking care of your plants doesn't have to be complicated. With a few easy tips, you can help them thrive year-round. From proper watering to giving them the right sunlight,
    </p>

    <ul className="space-y-4 text-left">
      <li className="flex items-center gap-3">
        <FaTint className="text-green-500" /> Water regularly but don’t overdo it
      </li>
      <li className="flex items-center gap-3">
        <FaSun className="text-yellow-500" /> Make sure your plant gets enough sunlight
      </li>
      <li className="flex items-center gap-3">
        <FaLeaf className="text-green-400" /> Clean the leaves to keep them dust-free
      </li>
      <li className="flex items-center gap-3">
        <FaBug className="text-red-400" /> Watch out for pests and treat quickly
      </li>
      <li className="flex items-center gap-3">
        <FaTemperatureHigh className="text-orange-400" /> Keep the temperature just right
      </li>
    </ul>
  </div>
</div>

        </div>
  );
};

export default PlantCareTips;