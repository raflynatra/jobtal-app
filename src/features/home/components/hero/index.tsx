import React from "react";
import heroImg from "@/assets/imgs/hero.jpg";

const Hero: React.FC = () => {
  return (
    <div className="mt-16 bg-emerald-900 h-[30rem] w-full bg-cover relative">
      <img
        src={heroImg}
        className="w-full h-full object-cover absolute mix-blend-multiply"
        alt="two people are shaking hands together"
      />
      <div className="mx-auto w-10/12 md:w-2/4 relative top-32">
        <h1 className="mb-10 text-white text-center text-2xl md:text-4xl lg:text-5xl font-bold italic">
          The Best Platform to Find Your Dream Job
        </h1>
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-emerald-600 focus:border-emerald-600"
              placeholder="Search your dream job here ..."
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
