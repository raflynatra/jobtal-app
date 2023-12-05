import React, { useContext, useEffect, useState } from "react";
import { MdFilterList } from "react-icons/md";
import JobCard from "../components/JobVacancy/JobCard";
import JobFilter from "../components/JobVacancy/Filter";
import SearchBar from "../components/JobVacancy/SearchBar";
import { JobVacancyContext } from "../context/JobVacancyContext";
import LandingLayout from "../layouts/LandingLayout";

function JobVacancy() {
  const { jobData, jobFunctions } = useContext(JobVacancyContext);
  const [params, setParams] = useState({});
  const { getJobData } = jobFunctions;

  useEffect(() => {
    getJobData(params);
  }, [params]);

  return (
    <LandingLayout>
      <div className="container mt-16 mb-5 md:mt-20 md:mx-auto">
        <SearchBar setParams={setParams} />
        <div className="px-5">
          <button
            type="button"
            className="w-full text-emerald-600 hover:text-white border border-emerald-600 hover:bg-emerald-600 focus:ring-1 focus:outline-none focus:ring-emerald-600 font-bold rounded-lg text-sm px-5 py-2 flex justify-center items-center gap-1 md:hidden"
            data-drawer-target="drawer-bottom-example"
            data-drawer-toggle="drawer-bottom-example"
            data-drawer-placement="bottom"
            aria-controls="drawer-bottom-example"
          >
            <MdFilterList className="w-4 h-4" />
            Filter
          </button>
        </div>
        <div className="md:flex md:justify-between gap-5">
          <aside className="w-72 hidden md:block" aria-label="Sidebar">
            <JobFilter setParams={setParams} />
          </aside>
          <div className="grid md:grid-cols-3 w-full gap-5 p-5 md:p-0">
            {jobData.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}

export default JobVacancy;
