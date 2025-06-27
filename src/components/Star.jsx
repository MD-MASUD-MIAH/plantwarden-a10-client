import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import { FaMapMarkedAlt, FaTree } from "react-icons/fa";
import { FiCalendar, FiClock, FiInfo } from "react-icons/fi";
import { GiTreeGrowth } from "react-icons/gi";
import { MdOutlineWaterDrop } from "react-icons/md";
ChartJS.register(ArcElement, Tooltip, Legend);
const Star = () => {
  // Data for the pie chart
  const popularDaysData = {
    labels: ["Sun", "Mon", "Wed", "Thu", "Other"],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Plant Analytics{" "}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Total Orders Card */}
        <div className="bg-white rounded-lg shadow p-6 flex items-center">
          <div className="bg-blue-100 p-4 rounded-full mr-4">
            <FaTree className="text-blue-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500">Total Planted Trees</p>
            <h3 className="text-2xl font-bold">124 </h3>
          </div>
        </div>

        {/* Total Earnings Card */}
        <div className="bg-white rounded-lg shadow p-6 flex items-center">
          <div className="bg-green-100 p-4 rounded-full mr-4">
            <GiTreeGrowth className="text-green-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500">Avg Tree Age</p>
            <h3 className="text-2xl font-bold">~8.3 months</h3>
          </div>
        </div>

        {/* Restaurants Card */}
        <div className="bg-white rounded-lg shadow p-6 flex items-center">
          <div className="bg-purple-100 p-4 rounded-full mr-4">
            <FaMapMarkedAlt className="text-purple-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500">Active Zones</p>
            <h3 className="text-2xl font-bold">6 regions</h3>
          </div>
        </div>

        {/* Total Clients Card */}
        <div className="bg-white rounded-lg shadow p-6 flex items-center">
          <div className="bg-[#9ecef4] p-4 rounded-full mr-4">
            <MdOutlineWaterDrop className=" text-2xl" />
          </div>
          <div>
            <p className="text-gray-500">Avg Watering </p>

            <div className="flex items-center gap-2 ">
              <p className="text-xl font-bold"> ~3.5 days </p>
              <span className="text-xs mt-2 text-gray-400 hidden md:block">
                (5040 minutes)
              </span>{" "}
            </div>
          </div>
        </div>

        {/* Average Order Time Card */}
        <div className="bg-white rounded-lg shadow p-6 flex items-center">
          <div className="bg-red-100 p-4 rounded-full mr-4">
            <FiClock className="text-red-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500">Avg Care Duration</p>
            <div className="flex gap-2">
           <p className="text-xl font-bold">   ~18.7 days{" "}</p>
              <span className="text-sm text-gray-400 hidden md:block mt-2">
                (26922 minutes)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Most Popular Days */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold flex items-center">
              <FiCalendar className="mr-2 text-blue-500" /> Popular Days for
              Tree Plantation
            </h2>
            <button className="text-blue-500 hover:text-blue-700">
              <FiInfo />
            </button>
          </div>
          <div className="h-64">
            <Pie data={popularDaysData} />
          </div>
        </div>

        {/* Most Popular Times */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold flex items-center">
              <FiClock className="mr-2 text-green-500" /> Most Popular Times
            </h2>
            <button className="text-blue-500 hover:text-blue-700">
              <FiInfo />
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
              <span>5:00 AM – 8:00 AM</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                35%
              </span>
            </div>
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
              <span>9:00 AM – 10:00 AM</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                28%
              </span>
            </div>
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
              <span>4:00 PM – 5:30 PM</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                20%
              </span>
            </div>
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
              <span>6:00 PM – 7:30 PM</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                12%
              </span>
            </div>
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
              <span>8:00 PM – 8:15 PM</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                5%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* More Info Section */}
    </div>
  );
};

export default Star;
