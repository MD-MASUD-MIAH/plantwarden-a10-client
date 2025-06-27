import { FaLeaf, FaRegSmile, FaSeedling, FaWater } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-50 py-10 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl flex items-center justify-center">
            <FaLeaf className="text-green-600 mr-3" />
            About PlantWarden
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Your digital companion for happier, healthier plants
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <FaWater className="text-green-600 text-xl" />
              </div>
              <h3 className="ml-4 text-lg font-medium text-gray-900">
                Smart Watering
              </h3>
            </div>
            <p className="text-gray-600">
              Never forget when to water your plants with our intelligent
              reminders tailored to each plant's needs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaSeedling className="text-blue-600 text-xl" />
              </div>
              <h3 className="ml-4 text-lg font-medium text-gray-900">
                Plant Library
              </h3>
            </div>
            <p className="text-gray-600">
              Access care guides for 1000+ plants with scientifically-verified
              information.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <FaRegSmile className="text-yellow-600 text-xl" />
              </div>
              <h3 className="ml-4 text-lg font-medium text-gray-900">
                Community
              </h3>
            </div>
            <p className="text-gray-600">
              Connect with fellow plant lovers and get expert advice in our
              growing community.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <FaLeaf className="text-purple-600 text-xl" />
              </div>
              <h3 className="ml-4 text-lg font-medium text-gray-900">
                Plant Diagnosis
              </h3>
            </div>
            <p className="text-gray-600">
              Identify problems and get treatment recommendations through our
              AI-powered scanner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
