import React from "react";

const FilterJobTenure = () => {
  const tenureList = [
    {
      id: "fullTime",
      label: "Full-time",
    },
    {
      id: "contract",
      label: "Contract",
    },
    {
      id: "partTime",
      label: "Part-time",
    },
    {
      id: "internship",
      label: "Internship",
    },
  ];
  return (
    <div className="pt-2 pb-4 border-b-[1px]">
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Job Tenure
      </label>

      {tenureList.map((tenure) => (
        <div key={tenure.id} className="flex items-center mb-4">
          <input
            id={tenure.id}
            type="checkbox"
            value={tenure.id}
            className="w-4 h-4 text-emerald-600 bg-gray-100 rounded border-gray-300 focus:ring-emerald-600 dark:focus:ring-emerald-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={tenure.id}
            className="ml-2 text-sm font-medium text-gray-900 cursor-pointer dark:text-gray-300"
          >
            {tenure.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterJobTenure;
