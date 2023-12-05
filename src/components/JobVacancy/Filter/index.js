import React from "react";
import FilterSalary from "./Salary";
import FilterJobType from "./Type";
import FilterJobTenure from "./Tenure";

function JobFilter({ setParams }) {
  return (
    <div className="rounded-lg overflow-y-auto py-4 bg-gray-50 shadow-md h-100vh">
      <h3 className="pb-4 px-3 border-b font-semibold">Search Filter</h3>

      <div className="space-y-2 py-3 px-3">
        <FilterSalary setParams={setParams} />
        <FilterJobType />
        <FilterJobTenure />
      </div>
    </div>
  );
}

export default JobFilter;
