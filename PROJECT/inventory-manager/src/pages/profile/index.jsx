import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const Userprofile = () => {
  const user = useSelector((state) => state.user);
  const { _id, Name, Email } = user[0];
  const [Password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [userProfile, setuserProfile] = useState({
    id: _id,
    name: Name,
    email: Email,
    password: Password,
  });
  const handleUpdate = () => {
    if (Password === confirmPassword) {
      setuserProfile({ ...userProfile, password: Password });
      const { data } = axios.post(
        "http://localhost:9000/auth/user/updateprofile",
        userProfile
      );

      toast.success(data);
    } else {
      toast.error("Password And Confirm Password not match");
    }
    console.log("🚀  ~ file: index.jsx:6 ~ Userprofile ~ user", user[0]);
  };

  return (
    <>
      <div class="bg-gray-200  flex justify-center h-screen">
        <div class="bg-white shadow-lg m-8 w-1/2 grid lg:flex justify-center rounded-xl">
          <div class="lg:w-1/3 bg-gray-800 rounded-xl "></div>
          <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10 shadow-2xl shadow-black w-full">
            <h1 className="text-center font-bold">User Profile</h1>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) =>
                    setuserProfile({ ...userProfile, name: e.target.value })
                  }
                  readOnly={false}
                  value={userProfile.name}
                  type="text"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  readOnly={true}
                  value={userProfile.email}
                  type="email"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  type="password"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div>
              <button
                onClick={handleUpdate}
                type="button"
                className="flex mt-3 w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
};
export default Userprofile;
