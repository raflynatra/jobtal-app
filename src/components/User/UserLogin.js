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
          <div className="relative mb-6">
            <input
              type="email"
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Email address
            </label>
          </div>
          <div className="relative mb-6">
            <input
              type="password"
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
