import React from "react";
import { MdClose } from "react-icons/md";

function UserLogin(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 py-36 px-3 md:px-0"
      onClick={props.onClose}
    >
      <div
        className="bg-white pt-5 pb-5 md:w-1/3 mx-auto rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center pb-3 px-5 border-b">
          <h1 className="font-bold text-2xl">User Login</h1>
          <MdClose
            size={25}
            className="cursor-pointer hover:text-gray-500"
            onClick={props.onClose}
          />
        </div>
        <form className="py-5 mx-10">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required=""
            />
          </div>
          <button
            type="submit"
            className="text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
