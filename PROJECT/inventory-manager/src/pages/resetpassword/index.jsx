import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Resetpassword = () => {
  const [isEmailnotvalid, setisEmailnotvalid] = useState(true);

  const [userid, setuserid] = useState("");
  const [useremail, setuseremail] = useState(null);
  const [userpassword, setuserpassword] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const navigate = useNavigate();

  const handleCheck = async () => {
    const { data } = await axios.post(
      "http://localhost:9000/auth/user/checkemail",
      {
        email: useremail,
      }
    );

    if (data !== "Email not found") {
      toast.success("success");
      toast.success("Now you can change your password");
      setuserid(data[0]._id);

      console.log("🚀  ~ file: index.jsx:34 ~ handleCheck ~ userid", useremail);

      setisEmailnotvalid(false);
    } else {
      toast.error("not found");
    }
  };

  const handleReset = async () => {
    if (password === confirmpassword) {
      // setuserpassword(password);
      console.log(
        "🚀  ~ file: index.jsx:50 ~ handleReset ~ password",
        password
      );

      const { data } = await axios.put(
        "http://localhost:9000/auth/user/reset-password",
        { id: userid, password: password }
      );
      toast.success(data);
      navigate("/signin");
    } else {
      toast.error("Password must match");
    }
  };

  return (
    <>
      <section class="bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')]">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Change Password
            </h2>
            <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  onChange={(e) => setuseremail(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="someone@mail.com"
                  required
                />
              </div>
              <button
                onClick={handleCheck}
                type="button"
                class="bg-blue-500 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Check Email
              </button>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Password
                </label>
                <input
                  readOnly={isEmailnotvalid}
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  onChange={(e) => setconfirmpassword(e.target.value)}
                  readOnly={isEmailnotvalid}
                  type="password"
                  placeholder="Confirm Password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <button
                onClick={handleReset}
                type="button"
                class="bg-green-500 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Reset passwod
              </button>
              <button
                onClick={() => navigate("/signin")}
                type="button"
                class="bg-red-500 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resetpassword;
