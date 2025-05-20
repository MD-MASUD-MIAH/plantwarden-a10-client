import React from 'react';
import { useLoaderData } from 'react-router';

const DetailsPage = () => {


    const plant = useLoaderData() 

    console.log(plant);
    
    return (
        
        <div className='w-11/12 mx-auto'>
          
 <div className=''>

<h1 className='text-center pt-10 text-4xl font-bold'>Event Overview</h1> 


<p className='text-center py-4 text-gray-400'>Thought for a couple of seconds



Get all the essential details you need in one place. Discover when and where the event takes place, <br /> <span className='hidden md:block'>  who’s on the lineup, and what experiences await you—from live performances and interactive workshops to  food stalls and art installations. Whether <br /> you’re planning your day, looking for must-see highlights, or checking practical info like entryrequirements and timings, this overview has   <br /> you covered so you can make  the most of the event.</span>
</p>
</div>

             <div className='  p-4 md:py-23  '> 

       <div className='border grid grid-cols-1 gap-20 lg:grid-cols-3 justify-center items-center  border-gray-400 rounded-2xl p-5 md:p-10'>
      
      
       <div className=' '>
           <img className='rounded-2xl  w-full h-full  ' src={plant.photo} alt="" /> 

           </div>


         <div className='flex flex-col gap-5'>
         <h1 className='font-bold text-2xl'>{plant.plantName}</h1> 
         
       


  <div>

  <div className="space-y-4">
  <div className="flex ">
    <span className="font-normal min-w-[200px]">Frequency:</span>
    <h1 className="font-bold">{plant.frequency}</h1>
  </div>
  <div className="flex">
    <span className="font-normal min-w-[200px]">Watering Last Date:</span>
    <h1 className="font-bold">{plant.lastLate}</h1>
  </div>
  <div className="flex">
    <span className="font-normal min-w-[200px]">Watering Next Date</span>
    <h1 className="font-bold">{plant.nextDate} </h1>
  </div>
  <div className="flex">
    <span className="font-normal min-w-[200px]">Category:</span>
    <h1 className="font-bold">{plant.category}</h1>
  </div>
</div>

    <div>
   

    </div>
  </div>
         {/* <p className=' hidden md:block text-[14px]'>{description}</p>   */}

      
         </div> 

        

       </div>
             
            </div>
        </div>
    );
};

export default DetailsPage;