import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Expenseform from "../components/expenseform";
import AppLayout from "../layout";
import Dashboard from "../pages/dashboard";
import Editpage from "../pages/editexpense";
import Userprofile from "../pages/profile";
import Protected from "../pages/protected";
import Resetpassword from "../pages/resetpassword";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import NoAuth from "./no-auth";

const Approutes = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route element={<NoAuth />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<Resetpassword />} />
          </Route>

          <Route element={<Protected />}>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/addexpense" element={<Expenseform />} />
              <Route
                path="/editexpense/:id/:item/:price/:userid/:date"
                element={<Editpage />}
              />
              <Route path="/userprofile" element={<Userprofile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Approutes;
