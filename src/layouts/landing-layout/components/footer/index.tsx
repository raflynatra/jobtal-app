import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/imgs/leaf.png";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-gray-50 rounded-lg shadow md:px-6 md:py-3 bottom-0">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link to="/">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src={logo} className="mr-3 h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Jobtal
            </span>
          </div>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li className="mr-4 hover:underline md:mr-6 ">
            <Link to="/">Job Vacancy</Link>
          </li>
          <li className="mr-4 hover:underline md:mr-6">
            <Link to="/">Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <span className="hover:underline">
          <Link to="/">Jobtal™</Link>
        </span>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
