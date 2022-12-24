import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Post from "../../17-12-22/post";
import PostDetail from "../../17-12-22/postdetail";
import Navbar from "../../17-12-22/Components/Navbar";
import Index from "../login";
import Signup from "../signup/Signup";
import Layout from "../../17-12-22/Layout/Layout";
import Profilecomp from "../../Form-task/profile-comp";
import Reactquery from "../../18-12-22/React-query";
import Weather from "../../Weather-App/weather";
import Showweather from "../../Weather-App/show-weather";

const Approute = () => {
  {
    /* <Route path="/" element={<Index />} /> */
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-query" element={<Reactquery />} />
        <Route path="/weather" element={<Weather />} />
        <Route
          path="/weather/show-weather/:country/:city"
          element={<Showweather />}
        />
        <Route path="/" element={<Layout />} />
        <Route path="/Profile-setting" element={<Profilecomp />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Posts" element={<Post />} />
        <Route path="/Post-detail/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approute;
