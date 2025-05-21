import React from 'react';
import { FaEye } from "react-icons/fa";
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';
const AllPlants = () => {

  const plants = useLoaderData()

  console.log(plants);
  
    return (
       <div className="w-11/12 mx-auto py-10 overflow-x-auto">
  <table className="table table-auto min-w-[800px]">
    <thead>
      <tr>
        <th>No.</th>
        <th>Plant Name</th>
        <th>Category</th>
        <th>Watering</th>
        <th>Frequency</th>
        <th></th>
      </tr>
    </thead>

    {
      plants.map((plant, index) => (
        <tbody key={plant._id}>
          <tr>
            <th>{index + 1}</th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={plant.photo} alt="Plant" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{plant.plantName}</div>
                  <div className="text-sm opacity-50">AD: {plant.addingDate}</div>
                </div>
              </div>
            </td>
            <td>
              {plant.category}
              <br />
              <span className="badge badge-ghost badge-sm">CL: {plant.careLevel}</span>
            </td>
            <td>
              LD: {plant.lastLate}
              <br />
              ND: {plant.nextDate}
            </td>
            <td>{plant.frequency}</td>
            <th>
              <Link to={`/details/${plant._id}`} className="btn btn-ghost btn-xs text-[#2ecc71]">Details</Link>
            </th>
          </tr>
        </tbody>
      ))
    }
  </table>
</div>

    );
};

export default AllPlants;