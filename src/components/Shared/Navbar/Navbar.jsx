import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLouOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log Out Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navItems = (
    <div className="flex justify-between">
      <div className="flex  items-center">
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/category">Category</NavLink>
        </li>
        <li>
          <NavLink to="/celebration">Celebration</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
      </div>

      <div className="flex  items-center">
        {user ? (
          <>
            <button onClick={handleLouOut}>Log Out</button>
            <p className="ml-10">{user.displayName}</p>
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar ml-4"
            >
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <div className="navbar bg-base-100 bg-opacity-30 text-white fixed z-10">
        <div className="w-[30%]">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl uppercase">corporate events</a>
        </div>

        <div className="navbar-center w-[70%] hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
