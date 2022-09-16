import React from "react";
import { MdAttachMoney, MdLocationPin } from "react-icons/md";
import { BsClock } from "react-icons/bs";

function JobCard(props) {
  const formatDate = (date) => {
    date = new Date(date);
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
    let diffDay = diffHour / 24;

    // formatting
    year = year.toString().slice(-2);
    month = month < 10 ? "0" + month : month;
    dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    if (diffSec < 1) {
      return "right now";
    } else if (diffMin < 1) {
      return `${diffSec} seconds ago`;
    } else if (diffHour < 1) {
      return `${diffMin} minutes ago`;
    } else if (diffDay < 1) {
      return `${Math.round(diffHour)} hours ago`;
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
    }
  };

  return (
    <a
      href={`/job-vacancy/${props.job.id}`}
      className="block p-3 bg-white rounded-lg border box-border border-gray-200 shadow-md hover:bg-gray-100 md:h-64 md:w-full"
    >
      <div className="flex items-center space-x-4 mb-3">
        <img
          src={props.job.company_image_url}
          alt={`${props.job.company_name}-logo`}
          className="w-16 object-cover relative"
        />
        <div className="card-title mb-2">
          <h5 className="text-lg font-bold tracking-tight text-gray-900">
            {props.job.title}
          </h5>
          <h6 className="text-gray-500 text-md">{props.job.company_name}</h6>
        </div>
      </div>
      <div>
        <p className="flex items-center text-md py-1">
          <MdLocationPin className="mr-1 w-5 h-5 text-gray-500" />
          {props.job.company_city}
        </p>
        <p className="flex items-center text-md py-1">
          <MdAttachMoney className="mr-1 w-5 h-5 text-gray-500" />
          {props.job.salary_min} - {props.job.salary_max}
        </p>
        <p className="flex items-center text-md py-1">
          {props.job.job_tenure} - {props.job.job_type}
        </p>
        <p className="flex items-center mt-3 text-sm text-gray-500">
          <BsClock className="mr-1 w-3 h-3 text-gray-500" />
          {`Updated at ${formatDate(props.job.updated_at)}`}
        </p>
      </div>
    </a>
  );
}

export default JobCard;
