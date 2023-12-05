import React from "react";
import { MdAttachMoney } from "react-icons/md";

const FilterSalary = ({ setParams }) => {
  return (
    <div className="pt-2 pb-4 border-b-[1px]">
      <label
        htmlFor="salary"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Salary
      </label>
      <div className="md:flex gap-1 items-center">
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-1 pointer-events-none">
            <MdAttachMoney className="w-5 h-5 text-gray-500" />
          </div>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 w-full pl-6 p-2"
            type="number"
            name="salary_min"
            placeholder="Min"
            onBlur={(e) =>
              setParams((prev) => ({
                ...prev,
                salary_min: parseInt(e.target.value),
              }))
            }
          />
        </div>
        <span>-</span>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-1 pointer-events-none">
            <MdAttachMoney className="w-5 h-5 text-gray-500" />
          </div>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 w-full pl-6 p-2"
            type="number"
            name="salary_max"
            placeholder="Max"
            onBlur={(e) =>
              setParams((prev) => ({
                ...prev,
                salary_max: parseInt(e.target.value),
              }))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSalary;
