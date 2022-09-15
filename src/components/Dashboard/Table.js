import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { JobVacancyContext } from "../../context/JobVacancyContext";

function Table() {
  const { jobData, jobFunctions } = useContext(JobVacancyContext);
  const { getJobData } = jobFunctions;

  useEffect(() => {
    getJobData();
  }, []);

  console.log(jobData);

  return (
    <div className="p-1 overflow-x-auto relative sm:rounded-lg">
      <div className="pb-4 bg-white dark:bg-gray-900">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
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
            id="table-search"
            className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6 text-center">
              Job Title
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Company Name
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Company City
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Job Tenure
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Job Type
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Job Salary
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {jobData.map((job, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              key={index}
            >
              <td className="py-4 px-6 text-center">{job.title}</td>
              <td className="py-4 px-6 text-center">{job.company_name}</td>
              <td className="py-4 px-6 text-center">{job.company_city}</td>
              <td className="py-4 px-6 text-center">{job.job_tenure}</td>
              <td className="py-4 px-6 text-center">{job.job_type}</td>
              <td className="py-4 px-6 text-center">{`Rp${job.salary_min} - Rp${job.salary_max}`}</td>
              <td className="py-4 px-6 flex gap-3 justify-center">
                <button
                  type="button"
                  className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-semibold rounded-lg text-sm px-4 py-2 text-center"
                >
                  <MdEdit size={20} />
                </button>
                <button
                  type="button"
                  className="text-red-500 hover:text-white border border-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-400 font-semibold rounded-lg text-sm px-4 py-2 text-center"
                >
                  <MdDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
          {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              Microsoft Surface Pro
            </th>
            <td className="py-4 px-6 text-center">White</td>
            <td className="py-4 px-6 text-center">Laptop PC</td>
            <td className="py-4 px-6 text-center">$1999</td>
            <td className="py-4 px-6 flex gap-3 justify-center">
              <a
                href="#"
                className="font-medium text-emerald-600 dark:text-emerald-600 hover:underline"
              >
                Edit
              </a>
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Delete
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              Magic Mouse 2
            </th>
            <td className="py-4 px-6 text-center">Black</td>
            <td className="py-4 px-6 text-center">Accessories</td>
            <td className="py-4 px-6 text-center">$99</td>
            <td className="py-4 px-6 flex gap-3 justify-center">
              <a
                href="#"
                className="font-medium text-emerald-600 dark:text-emerald-600 hover:underline"
              >
                Edit
              </a>
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Delete
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              Apple Watch
            </th>
            <td className="py-4 px-6 text-center">Silver</td>
            <td className="py-4 px-6 text-center">Accessories</td>
            <td className="py-4 px-6 text-center">$179</td>
            <td className="py-4 px-6 flex gap-3 justify-center">
              <a
                href="#"
                className="font-medium text-emerald-600 dark:text-emerald-600 hover:underline"
              >
                Edit
              </a>
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Delete
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              iPad
            </th>
            <td className="py-4 px-6 text-center">Gold</td>
            <td className="py-4 px-6 text-center">Tablet</td>
            <td className="py-4 px-6 text-center">$699</td>
            <td className="py-4 px-6 flex gap-3 justify-center">
              <a
                href="#"
                className="font-medium text-emerald-600 dark:text-emerald-600 hover:underline"
              >
                Edit
              </a>
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Delete
              </a>
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              Apple iMac 27"
            </th>
            <td className="py-4 px-6 text-center">Silver</td>
            <td className="py-4 px-6 text-center">PC Desktop</td>
            <td className="py-4 px-6 text-center">$3999</td>
            <td className="py-4 px-6 flex gap-3 justify-center">
              <a
                href="#"
                className="font-medium text-emerald-600 dark:text-emerald-600 hover:underline"
              >
                Edit
              </a>
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Delete
              </a>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
