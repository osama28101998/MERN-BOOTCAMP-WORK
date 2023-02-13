import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Post from "../../17-12-22/post";
import PostDetail from "../../17-12-22/postdetail";

import Signup from "../signup/Signup";
import Layout from "../../17-12-22/Layout/Layout";
import Profilecomp from "../../Form-task/profile-comp";
import Reactquery from "../../18-12-22/React-query";
import Weather from "../../Weather-App/weather";
import Showweather from "../../Weather-App/show-weather";
import Addcars from "../../24-12-22/Addcar";
import Showcars from "../../24-12-22/showcars";
import Colortask from "../../24-12-22/Tasks/color-task";
import FormSignup from "../../24-12-22/Tasks/Form-Signup";
import Dog from "../../24-12-22/Tasks/dog";
import Addstudent from "../../31-12-22/Addstudent";
import Showstudent from "../../31-12-22/Showstudent";
import Dialog from "../../21-01-23/Cardtask";
import Jokes from "../../22-1-23/jokes-task";
import Usercard from "../../27-1-23/usercard";

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
        <Route path="/usercard" element={<Usercard />} />
        <Route path="/jokes" element={<Jokes />} />
        <Route path="/Addstudent" element={<Addstudent />} />
        <Route path="/Showstudent" element={<Showstudent />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/Form-signup" element={<FormSignup />} />
        <Route path="/Profile-setting" element={<Profilecomp />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/color-task" element={<Colortask />} />
        <Route path="/Posts" element={<Post />} />
        <Route path="/Post-detail/:id" element={<PostDetail />} />
        <Route path="/Cars" element={<Addcars />} />
        <Route path="/modal" element={<Dialog />} />
        <Route path="/Cars/Details/:id" element={<Showcars />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approute;
