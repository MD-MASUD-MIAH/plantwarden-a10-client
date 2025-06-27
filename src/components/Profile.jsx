import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FiEdit, FiMail, FiUser, FiKey, FiAward } from "react-icons/fi";
import Lotto from '../../public/lottie.json.json'
const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        {/* Cover Photo with Gradient Overlay */}
        <div className="relative h-48 md:h-56 w-full bg-gradient-to-r from-blue-500 to-teal-400">
          <img
            alt="cover photo"
            src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* Profile Content */}
        <div className="px-6 pb-8 relative">
          {/* Profile Picture with Animation */}
          <div className="flex justify-center -mt-16 mb-4 relative group">
            <div className="relative">
              <img
                alt="profile"
                src={user?.photoURL || "https://i.pravatar.cc/150?img=3"}
                className="mx-auto object-cover rounded-full h-32 w-32 border-4 border-white shadow-lg transition-all duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://i.pravatar.cc/150?img=3";
                }}
              />
              <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition-colors">
                <FiEdit size={16} />
              </button>
            </div>
          </div>

          {/* User Info */}
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {user?.displayName || "Anonymous User"}
            </h1>
            <div className="inline-flex items-center mt-2 px-4 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-semibold rounded-full">
              <FiAward className="mr-1" />
              Plant Enthusiast
            </div>
            <p className="text-gray-500 mt-2">{user?.email}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg text-center transition-all hover:bg-blue-50 hover:shadow">
              <div className="text-blue-500 flex justify-center mb-2">
                <FiUser size={20} />
              </div>
              <p className="text-sm text-gray-500">Member Since</p>
              <p className="font-semibold">Jan 2023</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center transition-all hover:bg-green-50 hover:shadow">
              <div className="text-green-500 flex justify-center mb-2">
                <FiMail size={20} />
              </div>
              <p className="text-sm text-gray-500">Email Verified</p>
              <p className="font-semibold">{user?.emailVerified ? "Yes" : "No"}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center transition-all hover:bg-purple-50 hover:shadow">
              <div className="text-purple-500 flex justify-center mb-2">
                <FiKey size={20} />
              </div>
              <p className="text-sm text-gray-500">Account Type</p>
              <p className="font-semibold">Premium</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center transition-all hover:bg-yellow-50 hover:shadow">
              <div className="text-yellow-500 flex justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">Last Active</p>
              <p className="font-semibold">2h ago</p>
            </div>
          </div>

          {/* User ID with Animation */}
          <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">User ID</p>
              <p className="font-mono text-sm text-gray-800 break-all">{user?.uid}</p>
            </div>
            <div className="h-16 w-16">
              <Lottie 
                animationData={Lotto

                } 
                loop={true}
                style={{ height: 64, width: 64 }}
              />
            </div>
          </div>

          {/* Edit Profile Button */}
         
        </div>
      </div>
    </div>
  );
};

export default Profile;