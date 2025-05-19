import { NavLink ,Link} from "react-router";
import logo from "../assets/logo1.png";
const Navbar = () => {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/allplans">All Plants</NavLink>
      <NavLink to="/addplnats">Add Plant</NavLink>
      <NavLink to="/myplants">My Plants</NavLink>
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

            <h1 className="hidden md:block text-[#2ecc71] font-bold text-3xl ">
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
        <div className="navbar-end flex gap-4">
          <Link to='/login' className="btn bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold py-2 px-5  shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">Login</Link>
          <Link to='/register' className="btn bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold py-2 px-5  shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
