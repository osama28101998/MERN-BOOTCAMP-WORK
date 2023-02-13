import React, { useState } from "react";
import Textfield from "./components/input";

export default function FormSignup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [errors, seterrors] = useState([]);
  const [isvalid, setisvalid] = useState(false);
  const handleclick = () => {
    if (!email.includes("@")) {
      const updatemail = [...errors, "email mus have @,"];
      seterrors(updatemail);
      setisvalid(false);
    }

    if (password != confirmpassword && password.length < 8) {
      const updatepassword = [
        ...errors,
        "password and confirm password not match ,password must 8 character,",
      ];
      seterrors(updatepassword);
      setisvalid(false);
    }

    if (email == "" || password == "" || confirmpassword == "") {
      const fillall = [...errors, "please fill are fields,"];
      seterrors(fillall);
      setisvalid(false);
    }

    if (
      email.includes("@") &&
      password == confirmpassword &&
      password.length == 8 &&
      confirmpassword.length == 8
    ) {
      setisvalid(true);
    }
  };
  return (
    <div className="bg-blue-900 justify-center items-center flex h-screen ">
      <div className="bg-sky-600 p-5 rounded-xl flex flex-col items-center">
        <Textfield label="Email" placeholder="Email" setstate={setemail} />
        <Textfield
          label="Password"
          placeholder="Password"
          setstate={setpassword}
        />
        <Textfield
          label="Confirm Password"
          placeholder="Confirm Password"
          setstate={setconfirmpassword}
        />
        <div className="mt-6">
          <button
            onClick={() => handleclick()}
            className="bg-green-600 text-blue px-2 py-2 rounded-md text-white"
          >
            Submit
          </button>
        </div>
        <div className="mt-6 bg-green-600 text-white">
          {isvalid == false ? errors.map((m) => m) : "Form Submitted"}
        </div>
      </div>
    </div>
  );
}
