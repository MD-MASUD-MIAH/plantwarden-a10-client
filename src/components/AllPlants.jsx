import { use, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { TitleUse } from "./title";

const AllPlants = () => {

  TitleUse('All Plants')
  const plants = useLoaderData();

  const { sort, setSort } = use(AuthContext);

  const [tree, setTree] = useState(plants);

  useEffect(() => {
    fetch(`https://plantwarden-b11a10-server.vercel.app/plants?sortBy=${sort}`)
      .then((res) => res.json())
      .then((data) => {
        setTree(data);
      });
  }, [sort, setTree]);

  return (
    <div className="w-11/12 mx-auto py-10 overflow-x-auto">
      <table className="table  table-auto min-w-[800px] ">
        <thead>
          <tr>
            <th>No.</th>
            <th>Plant Name</th>
            <th>Category</th>
            <th>
              {sort ? "Watering Next Date " : "Watering"}
              <button
                className="btn ml-4  text-white text-xs bg-[#2ecc71]"
                onClick={() => setSort(!sort)}
              >
                {" "}
                {sort ? "unsort" : "sort"}
              </button>
            </th>
            <th>Frequency</th>
            <th>Action</th>
          </tr>
        </thead>

        {tree?.slice()?.reverse()?.map((plant, index) => (
            <tbody className="" key={plant._id}>
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
                      <div className="font-bold text-xl sylefont">{plant.plantName}</div>
                      <div className="text-sm opacity-50">
                        AD: {plant.addingDate}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {plant.category}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    CL: {plant.careLevel}
                  </span>
                </td>
                {sort ? (
                  <td> {plant.nextDate}</td>
                ) : (
                  <td>
                    {" "}
                    LD : {plant.lastLate} <br /> ND : {plant.nextDate}{" "}
                  </td>
                )}
                <td className="sylefont text-xl">{plant.frequency}</td>
                <th>
                  <Link
                    to={`/details/${plant._id}`}
                    className="btn btn-ghost btn-xs text-[#2ecc71]"
                  >
                    Details
                  </Link>
                </th>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default AllPlants;
