
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./containers/home.jsx";
import RepairForm from "./containers/repairForm.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<RepairForm />} />
      </Routes>
    </BrowserRouter>
  );
}