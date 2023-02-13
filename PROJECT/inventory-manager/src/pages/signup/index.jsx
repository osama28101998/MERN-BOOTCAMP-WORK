import axios from "axios";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
export default function Signup() {
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSignup = async () => {
    if (fullname || email || password == "") {
      toast.error("Please fill all fields");
    } else {
      const { data } = await axios.post(
        "http://localhost:9000/auth/user/signup",
        {
          name: fullname,
          email: email,
          password: password,
        }
      );
      if (data == "Signup Successfully") {
        toast.success(data);
      } else {
      }
      toast.error(data);
    }
  };

  return (
    <>
      <Toaster />
      <div class="bg-grey-lighter min-h-screen flex flex-col bg-[url('https://t3.ftcdn.net/jpg/01/22/71/96/360_F_122719641_V0yw2cAOrfxsON3HeWi2Sf4iVxhv27QO.jpg')]">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class=" px-6 py-8 rounded-3xl shadow-full shadow-slate-800 text-black w-full bg-blue-600">
            <h1 class="mb-8 text-3xl text-center text-white">Sign up</h1>
            <input
              onChange={(e) => setfullname(e.target.value)}
              type="text"
              class="block border border-grey-light w-full p-3  mb-4 rounded-xl"
              placeholder="Full Name"
            />

            <input
              onChange={(e) => setemail(e.target.value)}
              type="text"
              class="block border border-grey-light w-full p-3  mb-4 rounded-xl"
              name="email"
              placeholder="Email"
            />

            <input
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              class="block border border-grey-light w-full p-3 rounded-xl mb-4"
              name="password"
              placeholder="Password"
            />

            <button
              onClick={handleSignup}
              type="submit"
              class="w-full text-center py-3  text-white bg-green-600 rounded-xl focus:outline-none my-1"
            >
              Create Account
            </button>
            <div class="text-grey-dark mt-6 text-center  text-white ">
              Already have an account?
              <Link
                to={"/"}
                class="no-underline text-white bg-slate-800 px-2 py-2 rounded-2xl ml-2 "
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
