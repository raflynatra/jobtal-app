import React, { useState } from "react";
import { MdLocationPin, MdSearch } from "react-icons/md";

function SearchBar({ setParams }) {
  const [searchValue, setSearchValue] = useState({});

  function handleClick() {
    setParams(searchValue);
  }

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    setSearchValue((searchValue) => ({ ...searchValue, [key]: value }));
  }

  return (
    <div className="p-5 md:px-0">
      <div className="flex flex-col md:flex-row items-center gap-3">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            name="title"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full pl-10 p-2.5"
            placeholder="Search job vacancy"
            required=""
            onChange={handleChange}
          />
        </div>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <MdLocationPin className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full pl-10 p-2.5"
            placeholder="Job location"
            required=""
          />
        </div>
        <button
          className="block w-full md:w-fit p-2.5 text-md font-bold text-white bg-emerald-600 rounded-lg border border-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 md:flex-none"
          onClick={handleClick}
        >
          <div className="flex justify-center gap-1 items-center">
            <MdSearch size={20} />
            <span className="md:sr-only">Search</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
