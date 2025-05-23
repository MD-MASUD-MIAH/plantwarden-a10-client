import { use, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import { TitleUse } from "./title";

const Addplants = () => {

  TitleUse('Add Plants')
  const navigate = useNavigate();
  const bdTime = new Date(Date.now() + 6 * 60 * 60 * 1000);
  const today = bdTime.toISOString().split("T")[0];
  const [date, setDate] = useState(today);

  const { user } = use(AuthContext);

  const handleaddPlants = (e) => {
    e.preventDefault();

    const fmr = e.target;

    const newPants = new FormData(fmr);
    const addNew = Object.fromEntries(newPants.entries());

    fetch("https://plantwarden-b11a10-server.vercel.app/plants", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addNew),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: " Plant Add Successfully!",
          icon: "success",
          draggable: true,
        });
        console.log("after add", data);

        navigate("/myplants");
      });
  };
  return (
    <div className=" w-11/12 mx-auto py-10">
      <div className="md:max-w-5xl mx-auto border border-[#2ecc71] rounded p-6 shadow ">
        <h2 className="text-3xl font-bold  mb-6 sylefont">Add New Plant</h2>
        <form
          onSubmit={handleaddPlants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Photo URL</label>
            <input
              name="photo"
              type="text"                                   
              placeholder="enter photo url"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="  text-sm font-medium mb-1">Plant Name</label>
            <input
              name="plantName"
              type="text"
              placeholder="  plant name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select name="category" className="select select-bordered w-full">
              <option disabled selected>
                Select a category
              </option>
              <option>Succulent</option>
              <option>Fern</option>
              <option>Flowering</option>
              <option>Herb</option>
              <option>Foliage</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Care Level</label>
            <select name="careLevel" className="select select-bordered w-full">
              <option disabled selected>
                Select care level
              </option>
              <option>Easy</option>
              <option>Moderate</option>
              <option>Difficult</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Watering Frequency
            </label>
            <input
              name="frequency"
              type="text"
              placeholder=" every 2 days"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Last Watered Date
            </label>
            <input
              name="lastLate"
              type="date"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Next Watering Date
            </label>
            <input
              name="nextDate"
              type="date"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Health Status
            </label>
            <input
              name="healthStatus"
              type="text"
              placeholder=" Healthy, Wilting"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">User Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">User Name</label>
            <input
              name="name"
              value={user.displayName}
              type="text"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              defaultValue={`A bold plant with glossy leaves. It adds a modern touch to indoor spaces and grows tall over time`}
              className="textarea textarea-bordered w-full"
              rows="3"
              placeholder="Brief description..."
            ></textarea>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-1">
              Adding Date
            </label>
            <input
              name="addingDate"
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold py-2 px-5 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Add Plant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addplants;
