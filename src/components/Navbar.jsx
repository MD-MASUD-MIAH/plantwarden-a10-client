import { Popover } from "@headlessui/react";
import { use } from "react";
import { Link, NavLink } from "react-router";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Swal from "sweetalert2";
import logo from "../assets/logo1.png";
import { AuthContext } from "../contexts/AuthContext";
import ThemeToggle from "./ThemsToggle";

const Navbar = () => {
  const { user, logout, isDark } = use(AuthContext);

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

  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/allplans">All Plants</NavLink>
     

      {/* Open the modal using document.getElementById('ID').showModal() method */}
     <Popover className="relative hidden md:block ">
  <Popover.Button> {isDark ? "🌙 Dark" : "☀️ Light"}</Popover.Button>
  
  <Popover.Panel className="absolute z-10 mt-1 -ml-36 w-48 bg-base-100 border border-gray-300 rounded shadow p-4">
    <ThemeToggle />
  </Popover.Panel>
</Popover>

<div className="block md:hidden">
  <ThemeToggle />
</div>
     <NavLink to={'/dashboard'}>Dashboard</NavLink>
    </>
  );
  return (
    <div
      className={` sticky top-0  z-50 ${isDark ? "bg-[#1B2027]" : "bg-[#2ecc71]"} `}
    >
      <div className="navbar w-11/12 mx-auto md:px-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-3 items-center    ">
            <img className="w-15 h-15 " src={logo} alt="" />

            <h1 className="hidden md:block  font-bold text-3xl text-white sylefont ">
              {" "}
              PlantWarden
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center justify-center text-white gap-10">
            {links}
            <li>
              {" "}
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <ThemeToggle />
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          {user ? (
            <div className="flex gap-4 justify-center items-center">
              <div className="group relative flex items-center">
                <div className="relative inline-block">
                  <div
                    data-tooltip-id="user-tooltip"
                    data-tooltip-content={
                      user?.displayName || "Please Enter Name"
                    }
                  >
                    {user && (
                      <img
                        className="rounded-full  h-8 w-8 md:w-[50px] md:h-[50px] cursor-pointer"
                        src={user && user.photoURL}
                        alt="User"
                      />
                    )}
                  </div>

                  <Tooltip id="user-tooltip" className="z-10" place="left" />
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="btn bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold py-2 px-5  shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                {" "}
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link
                to="/login"
                data-tooltip-id="login-tooltip"
                data-tooltip-content="Please Login"
                className="btn bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold py-2 px-5 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Login
              </Link>

              <Link
                to="/register"
                data-tooltip-id="register-tooltip"
                data-tooltip-content="Please Register"
                className="btn bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold py-2 px-5 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Register
              </Link>

              {/* Tooltip components */}
              <Tooltip id="login-tooltip" place="left" />
              <Tooltip id="register-tooltip" place="right" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
