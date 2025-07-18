import { use, useState } from "react";
import { BsFillHouseAddFill } from 'react-icons/bs'
import { AiOutlineBars } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { GrLogout } from "react-icons/gr";
import { Link } from "react-router";
import logo from "../assets/logo1.png";
import MenuItem from "./MenuItem";
import { BsFingerprint } from 'react-icons/bs'
import { GiPlantSeed } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
const SideBar = () => {
  const [isActive, setActive] = useState(false);

const {logout} = use(AuthContext)
   const handleLogout = () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to Logout!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Logout!",
      }).then((result) => {
        if (result.isConfirmed) {
          logout()
            .then(() => {
              Swal.fire({
                title: "Logout!",
                text: "Logout successfully.",
                icon: "success",
              });
            })
            .catch((error) => {
              console.log(error.message);
  
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.message}`,
              });
            });
        }
      });
    };
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img
                // className='hidden md:block'
                src={logo}
                alt="logo"
                width="100"
                height="100"
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-[#2ecc71]  mx-auto">
              <Link to="/">
                <div className="flex gap-3 items-center    ">
                           <img className="w-15 h-15 " src={logo} alt="" />
               
                           <h1 className="hidden md:block  font-bold text-3xl text-white sylefont ">
                             {" "}
                             PlantWarden
                           </h1>
                         </div>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <MenuItem
                icon={HiOutlineHome}
                label="Home"
                address="/"
              />


              <MenuItem
        icon={GiPlantSeed }
        label='Add Plant'
        address='addplnats'
      />
              <MenuItem
                icon={BsFingerprint}
                label="My Plant"
                address="myplants"
              />

              <MenuItem
                icon={BsGraphUp}
                label="Statistics"
                address="/dashboard"
              />
              {/* <AdminMenu /> */}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <MenuItem
            icon={HiOutlineUser}
            label="Profile"
            address="profile"
          />
          <button className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform">
            <GrLogout className="w-5 h-5" />

            <button onClick={handleLogout} className="mx-4 font-medium">Logout</button>
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
