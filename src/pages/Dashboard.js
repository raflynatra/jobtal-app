import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";

function Dashboard(props) {
  return (
    <div className="container md:mt-20 mb-5 md:mx-auto">
      <div className="flex justify-between gap-5 py-5">
        <Sidebar />
        <div className="px-5 pb-8 w-5/6 bg-white rounded-lg border shadow-md">
          <h1 className="font-bold text-4xl mt-5 mb-3">{props.page}</h1>
          {props.component}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
