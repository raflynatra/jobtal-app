import React, { createContext, useState } from "react";
import axios from "axios";

export const JobVacancyContext = createContext();

export const JobVacancyProvider = (props) => {
  const [jobData, setJobData] = useState([]);

  const getJobData = (params) => {
    return new Promise((resolve, reject) => {
      axios({
        url: "https://dev-example.sanbercloud.com/api/job-vacancy",
        params: params,
      })
        .then((res) => {
          resolve(setJobData([...res.data.data]));
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const getJobDataById = (id) => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
      .then((res) => {
        setJobData([...res.data.data]);
      })
      .catch((error) => {});
  };

  const jobFunctions = {
    getJobData,
    getJobDataById,
  };

  return (
    <JobVacancyContext.Provider value={{ jobData, jobFunctions }}>
      {props.children}
    </JobVacancyContext.Provider>
  );
};
