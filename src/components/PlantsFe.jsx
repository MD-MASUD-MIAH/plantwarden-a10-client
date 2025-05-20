import React from 'react';
import { motion } from 'framer-motion';
const PlantsFe = () => {
    return (
        <div>

            <div className=''>

<h1 className='text-center pt-10 text-4xl font-bold'>Better Plant Care, Made Simple</h1> 


<p className='text-center text-xs py-4 text-gray-400'>Taking care of your plants has never been easier. Our system helps you monitor your plants’ health,

<br /> watering schedule, fertilizing, and other care tasks with simple, timely reminders and easy-to-follow guidance.
</p>
</div>

              <div className="w-11/12 mx-auto pb-10 md:pb-50 mt-12 px-4 grid md:grid-cols-2 gap-35 md:gap-10 items-center">
      {/* Left Image Section */}
      <div className="relative group">
        <motion.img 
         initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src="https://i.ibb.co/60pYZSmP/90912360.jpg"
          alt="Vases"
          className="w-full rounded-lg shadow-lg"
        
        ></motion.img>

        <motion.img
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src="https://i.ibb.co/Tx4ZXQ1Z/Outdoor-Fiddle-Leaf-Fig-1024x768-1.jpg"
          alt="Vase with Flower"
          className="absolute left-1/2 top-1/2 w-2/3 transform -translate-x-1/2 translate-y-10 z-10 rounded-lg shadow-xl"
        > </motion.img>
      </div>

      {/* Right Text Section */}
      <div className="space-y-4">
        <p className="text-[#2ecc71] font-semibold"> Make it easy.</p>
        <h2 className="text-3xl font-bold text-gray-800">Helping Your Plants Grow Strong</h2>
        <p className="text-gray-600">
       “We are here to help your plants grow healthy and strong with simple and practical advice. Whether it’s reminding you when to water, how to fertilize, or protect from pests, we guide you every step of the way. With easy-to-follow tips and useful tools, taking care of your plants becomes fun and stress-free. Watch your plants thrive and flourish like never before!”


        </p>
      
      </div>
    </div>
            
        </div>
    );
};

export default PlantsFe;