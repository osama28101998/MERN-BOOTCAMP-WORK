import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../login";
import Signup from "../signup/Signup";

const Approute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approute;
