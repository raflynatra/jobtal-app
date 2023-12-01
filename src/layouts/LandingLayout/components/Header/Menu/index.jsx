import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import UserLogin from "../../../../../components/User/UserLogin";

const Menu = ({ open, setOpen }) => {
  const [showModal, setShowModal] = useState(false);
  const navItem = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/job-vacancies",
      title: "Job Vacancy",
    },
  ];

  return (
    <>
      <div
        className={`justify-between items-center w-full h-[100vh] md:h-full md:flex md:order-1 duration-200 ${
          !open ? "hidden" : ""
        }`}
        id="navbar-sticky"
      >
        <div className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-white">
          {navItem.map(({ path, title }, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "block py-2 pr-4 pl-3 rounded md:p-0 text-white bg-emerald-600 md:bg-transparent md:text-emerald-600 md:font-semibold"
                  : "block py-2 pr-4 pl-3 rounded md:p-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-600 md:font-semibold"
              }
              onClick={() => setOpen(!open)}
            >
              {title}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-col p-4 gap-5 md:flex-row md:mt-0 md:text-md md:font-medium md:border-0 md:items-center">
          <div>
            <NavLink
              to="/register"
              className="text-center md:hover:text-emerald-600 font-semibold"
            >
              Register
            </NavLink>
          </div>

          <div>
            <button
              type="button"
              className="text-white bg-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
              onClick={() => setShowModal(true)}
            >
              <span className="font-semibold">Login</span>
            </button>
          </div>
        </div>
      </div>

      <UserLogin onClose={() => setShowModal(false)} show={showModal} />
    </>
  );
};

export default Menu;
