import React, { useContext } from "react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2"; // SweetAlert2 ইম্পোর্ট
import { MdArrowCircleRight } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogout = () => {
    // লগআউটের আগে কনফার্মেশন অ্যালার্ট
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            // সফলভাবে লগআউট হলে ছোট একটি সাকসেস মেসেজ
            Swal.fire({
              title: "Logged Out!",
              text: "You have been logged out successfully.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
          })
          .catch((error) => {
            console.log(error);
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-medium" : ""
          }
          to="/services"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-medium" : ""
          }
          to="/aboutUs"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-medium" : ""
          }
          to="/sendParcel"
        >
          Send Parcel
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-medium" : ""
          }
          to="/coverage"
        >
          Coverage
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-medium" : ""
              }
              to="/dashbord/myParcels"
            >
              My Parcels
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-2 lg:px-10">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl p-0">
          <Logo />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <div className="flex items-center gap-3">
            <button
              onClick={handelLogout}
              className="btn btn-error btn-sm lg:btn-md text-white font-medium"
            >
              Logout
            </button>
          </div>
        ) : (
          <NavLink to="/login" className="btn btn-neutral btn-sm lg:btn-md">
            Sign In
          </NavLink>
        )}

        <Link className="btn bg-[#CAEB66]" to="/beARider">
          Be a rider <MdArrowCircleRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
