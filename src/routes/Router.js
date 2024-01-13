import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Cars from "../pages/Cars";

import AddCar from "../pages/AddCar";
import AdminPanel from "../pages/AdminPanel";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/cars" element={<Cars />} />} />

      <Route path="/cars" element={<Cars />} />
      <Route path="/admin-panel" element={<AdminPanel />} />

      <Route path="/add-car" element={<AddCar />} />
    </Routes>
  );
};

export default Router;
