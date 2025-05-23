import { NavLink ,Link} from "react-router";
import logo from "../assets/logo1.png";
import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import ThemeToggle from "./ThemsToggle";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';


const Navbar = () => {

  const {user,logout} = use(AuthContext) 

  const handleLogout = ()=>{


   


Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to Logout!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Logout!"
}).then((result) => {
  if (result.isConfirmed) {



 logout().then(()=>{

 Swal.fire({
      title: "Logout!",
      text: "Logout successfully.",
      icon: "success"
    });

 }).catch(error=>{

      console.log(error.message);


      
         Swal.fire({
  icon: "error",
  title: "Oops...",
  text: `${error.message}`,
 
});
    })



   
  }
});





  }
  
  
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/allplans">All Plants</NavLink>
      <NavLink to="/addplnats">Add Plant</NavLink>
      <NavLink to="/myplants">My Plants</NavLink>
      <ThemeToggle></ThemeToggle>
    </>
  );
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar md:px-10">
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

            <h1 className="hidden md:block text-[#2ecc71] font-bold text-3xl sylefont ">
              {" "}
              PlantWarden
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center justify-center gap-10">
            {links}
          </ul>
        </div>
        <div className="navbar-end ">
      {

user ?<div className="flex gap-4 justify-center items-center">

  <div className="group relative flex items-center">
  
  
       <div className="relative inline-block">
      <div
        data-tooltip-id="user-tooltip"
        data-tooltip-content={user?.displayName || "Please Enter Name"}
      >
{

  user &&  <img
  className="rounded-full  h-8 w-8 md:w-[50px] md:h-[50px] cursor-pointer"
  src={user && user.photoURL}
  alt="User"
/>
 }
      
      </div>

      <Tooltip id="user-tooltip" className="z-10" place="left" />
    </div>

 
 
</div>
<button onClick={handleLogout} className="btn bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold py-2 px-5  shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">  Logout</button>

</div> :  <div className="flex gap-4">
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
 
      }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
