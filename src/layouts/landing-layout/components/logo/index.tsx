import React from "react";
import { NavLink } from "react-router-dom";
import logo from "@/assets/imgs/leaf.png";

const HeaderLogo: React.FC = () => {
  return (
    <div className="min-w-[120px]">
      <NavLink to="/" className="flex items-center">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Jobtal Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Jobtal
        </span>
      </NavLink>
    </div>
  );
};

export default HeaderLogo;
