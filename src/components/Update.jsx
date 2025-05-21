import React, { use } from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { useLoaderData } from 'react-router';

const Update = () => {
 
    const {user} = use(AuthContext)

    const updatePlant = useLoaderData()

    const handleUpdate = ()=>{

     console.log('update');
     
    }
    return (
        <div className=' w-11/12 mx-auto py-10'>
         <div className="md:max-w-5xl mx-auto border border-[#2ecc71] rounded p-6 shadow bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Update Plant</h2>
      <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Photo URL</label>
          <input name='photo' type="text" defaultValue={updatePlant.photo} placeholder='enter photo url' className="input input-bordered w-full" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Plant Name</label>
          <input name='plantName' defaultValue={updatePlant.plantName} type="text" placeholder="plant name" className="input input-bordered w-full" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select defaultValue={updatePlant.category} name='category' className="select select-bordered w-full">
            <option disabled selected>Select a category</option>
            <option>Succulent</option>
            <option>Fern</option>
            <option>Flowering</option>
            <option>Herb</option>
            <option>Foliage</option>
          </select>
        </div>

       

        <div>
          <label className="block text-sm font-medium mb-1">Care Level</label>
          <select name='careLevel' defaultValue={updatePlant.careLevel} className="select select-bordered w-full">
            <option disabled selected>Select care level</option>
            <option>Easy</option>
            <option>Moderate</option>
            <option>Difficult</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Watering Frequency</label>
          <input name='frequency' defaultValue={updatePlant.frequency} type="text" placeholder=" every 2 days" className="input input-bordered w-full" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Last Watered Date</label>
          <input name='lastLate' type="date" defaultValue={updatePlant.lastLate} className="input input-bordered w-full" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Next Watering Date</label>
          <input name='nextDate' defaultValue={updatePlant.nextDate} type="date" className="input input-bordered w-full" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Health Status</label>
          <input name='healthStatus' defaultValue={updatePlant.healthStatus} type="text" placeholder=" Healthy, Wilting" className="input input-bordered w-full" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">User Email</label>
          <input type="email" name='email' value={user.email} className="input input-bordered w-full" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">User Name</label>
          <input name='name' value={user.displayName} type="text"  className="input input-bordered w-full" />
        </div>

         <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea name='description' defaultValue={updatePlant.description} className="textarea textarea-bordered w-full" rows="3" placeholder="Brief description..."></textarea>
        </div>
       
      
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold py-2 px-5 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
         Update
          </button>
        </div> 

      </form>
    </div>
      </div>
    );
};

export default Update;