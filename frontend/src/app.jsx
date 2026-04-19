
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./containers/login.jsx";
import Home from "./containers/home.jsx";
import RepairForm from "./containers/repairForm.jsx";

export default function App() {
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={token ? <Home /> : <Login />}
        />
        <Route path="/create" element={<RepairForm />} />
      </Routes>
    </BrowserRouter>
  );
}