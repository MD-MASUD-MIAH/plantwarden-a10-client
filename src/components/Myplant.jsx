import { use, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import { TitleUse } from "./title";
const Myplant = () => {


  TitleUse('My Plants')
  const { user } = use(AuthContext);

  const data = useLoaderData();

  const filter = data.filter((dat) => dat.email === user.email); 

 
  
  const [plants, setPlants] = useState(filter);


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be Delete this plant!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://plantwarden-b11a10-server.vercel.app/plants/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaing = plants.filter((res) => res._id !== id);

              setPlants(remaing);
            }

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              timer: 1500,
            });
          });
      }
    });

    console.log(id);











  };

  console.log(plants);
  

  return (
    <div className="w-11/12 mx-auto  min-h-[calc(100vh-300px)]">
      <div className="text-center pt-10">
        <h1 className="text-4xl font-bold inline-block sylefont">
          My Plants
        </h1>

        <div className="mt-3 flex flex-col items-center space-y-1">
          <span className="w-28 h-[3px] rounded-full bg-[#2ecc71] shadow-md"></span>
          <span className="w-16 h-[2px] rounded-full bg-[#2ecc71] shadow-sm"></span>
        </div>
      </div>

      {plants.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 py-10 ">
          {plants.map((res) => (
            <div
              key={res._id}
              className="flex flex-col shadow-md rounded-xl overflow-hidden border border-[#2ecc71] "
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 p-4">
                <img
                  src={res.photo}
                  alt="Plant"
                  className="w-full sm:w-32 h-32 object-contain rounded-xl"
                />
                <div className="flex flex-col justify-between flex-grow text-sm sm:text-base">
                  <p className="text-inherit">
                    <span className="font-semibold">Name:</span> {res.plantName}
                  </p>
                  <p className="text-inherit">
                    <span className="font-semibold">Category:</span>{" "}
                    {res.category}
                  </p>
                  <p className="text-inherit">
                    <span className="font-semibold">Added:</span>{" "}
                    {res.addingDate}
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-2 p-4 border-[#2ecc71] border-t">
                <Link to={`/update/${res._id}`}>
                  <button className="btn btn-sm bg-gray-600 text-white hover:bg-gray-700">
                    <FaEdit />
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(res._id)}
                  className="btn btn-sm text-white hover:bg-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-[calc(100vh-300px)]  flex items-center justify-center px-4">
          <div className="text-center py-10">
            <h1 className="text-2xl font-semibold mb-4">
              You haven’t added any plants yet!
            </h1>
            <p className=" mb-6">
              Start building your green space by adding your first plant.
            </p>
            <Link
              to="/addplnats"
              className="inline-block bg-[#2ecc71] hover:bg-[#27ae60] text-white font-medium py-2 px-5 rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Add a Plant Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Myplant;
