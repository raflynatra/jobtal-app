import React from "react";
import homeIllu from "../../img/home-illustration.svg";

function HomeTop() {
  return (
    <div className="py-10 px-5 md:flex md:flex-row justify-around items-baseline">
      <div className="self-center flex flex-col items-center md:w-1/3 lg:w-full">
        <h1 className="mb-10 md:mb-16 text-center text-2xl md:text-5xl font-bold">
          Why You Should Choose Us
        </h1>
        <img src={homeIllu} className="w-1/2" alt="illustration" />
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 md:w-2/3 lg:grid-cols-3 lg:w-full">
        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            Noteworthy technology acquisitions 2021
          </h3>
          <p className="font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            Noteworthy technology acquisitions 2021
          </h3>
          <p className="font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            Noteworthy technology acquisitions 2021
          </h3>
          <p className="font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            Noteworthy technology acquisitions 2021
          </h3>
          <p className="font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            Noteworthy technology acquisitions 2021
          </h3>
          <p className="font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeTop;
