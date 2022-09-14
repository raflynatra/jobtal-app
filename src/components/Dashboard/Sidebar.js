import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const menu = [
    {
      url: "/dashboard",
      title: "Dashboard",
    },
    {
      url: "/job-form",
      title: "Form",
    },
    {
      url: "/change-password",
      title: "Change Password",
    },
  ];
  return (
    <aside className="w-1/6" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-white rounded-lg shadow-md border">
        <ul className="space-y-2">
          {menu.map((item) => (
            <li
              className={
                item.title === "Change Password" ? "border-t pt-2" : ""
              }
              key={item.title}
            >
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-100"
                    : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                }
              >
                <span className="ml-3">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
