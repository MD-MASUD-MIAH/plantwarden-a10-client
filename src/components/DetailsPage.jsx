import React from 'react';
import { useLoaderData } from 'react-router';
import { FcViewDetails } from "react-icons/fc";
import { TitleUse } from './title';
const DetailsPage = () => {

      TitleUse('Details')
    const plant = useLoaderData() 

  
    
    return (
        
        <div className='w-11/12 mx-auto'>
          
 <div className=''>

<h1 className='text-center pt-10 text-4xl sylefont font-bold'>Meet Our New Plant</h1> 


<p className='text-center text-xs py-4 text-gray-400'>Thought for a couple of seconds

These newly added plants bring freshness and green vibes to your space. Check out what’s just arrived!

<br /> New plants, new love! Explore our latest collection of charming plants that will add beauty and calm to any space.
</p>
</div>

             <div className='  p-4 md:py-10  '> 

       <div className='border grid grid-cols-1 gap-20 lg:grid-cols-3 justify-center items-center  border-gray-400 rounded-2xl p-5 md:p-10'>
      
      
       <div className=' '>
           <img className='rounded-2xl  w-full h-full  ' src={plant.photo} alt="" /> 

           </div>


         <div className='flex flex-col gap-5'>
         <h1 className='font-bold text-3xl sylefont'>{plant.plantName}</h1> 
         
       


  <div>

  <div className="space-y-4">
  <div className="flex ">
    <span className="font-normal min-w-[100px]  md:min-w-[200px]">Frequency:</span>
    <h1 className="font-bold">{plant.frequency}</h1>
  </div>
  <div className="flex">
    <span className="font-normal hidden md:block min-w-[100px]  md:min-w-[200px]"> Watering Last Date:</span>
    <span className="font-normal min-w-[100px] md:hidden block md:min-w-[200px]"> Last Date:</span>
    <h1 className="font-bold">{plant.lastLate}</h1>
  </div>
  <div className="flex">
   <span className="font-normal hidden md:block min-w-[100px]  md:min-w-[200px]"> Watering Last Date:</span>
    <span className="font-normal min-w-[100px] md:hidden block md:min-w-[200px]"> Last Date:</span>
    <h1 className="font-bold">{plant.nextDate} </h1>
  </div>
  <div className="flex">
    <span className="font-normal min-w-[100px]  md:min-w-[200px]">Category:</span>
    <h1 className="font-bold">{plant.category}</h1>
  </div>
  <div className="flex">
    <span className="font-normal min-w-[100px]  md:min-w-[200px]">Health Status:</span>
    <h1 className="font-bold">{plant.healthStatus}</h1>
  </div>

  <div className="flex">
    <span className="font-normal min-w-[100px]  md:min-w-[200px]">Care Level:</span>
    <h1 className="font-bold">{plant.careLevel}</h1>
  </div>


</div>

    <div>
   

    </div>
  </div>
         <p className=' hidden md:block text-[14px]'>{plant.description}</p>  

      
         </div> 

        

       </div>
             
            </div>
        </div>
    );
};

export default DetailsPage;