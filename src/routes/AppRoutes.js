import React from "react";
import { Route, Routes } from "react-router-dom";
import { PUBLIC_ROUTES } from "./RouteList";

function AppRoutes() {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Routes>
  );
}

export default AppRoutes;
