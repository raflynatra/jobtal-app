import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
