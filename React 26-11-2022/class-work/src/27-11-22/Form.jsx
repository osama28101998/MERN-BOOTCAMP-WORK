import React, { useState } from "react";
import Textcomp from "./tf-comp";

const Form = () => {
  let [state, setState] = useState("");
  let [email, setEmail] = useState("");
  let [address, setAddress] = useState("");
  let [age, setAge] = useState("");
  const handleClick = () => {
    alert(
      "Name : " +
        state +
        "  Email : " +
        email +
        " Address :  " +
        address +
        "  Age : " +
        age
    );
  };
  const Handlechange = (params) => {
    console.log("🚀 ~ file: Form.jsx ~ line 9 ~ handlechange ~ params", params);
    setState(params.target.value);
  };

  const handlemail = (params) => {
    console.log("🚀 ~ file: Form.jsx ~ line 9 ~ handlechange ~ params", params);
    setEmail(params.target.value);
  };

  const handleaddress = (params) => {
    console.log("🚀 ~ file: Form.jsx ~ line 9 ~ handlechange ~ params", params);
    setAddress(params.target.value);
  };

  const handleage = (params) => {
    console.log("🚀 ~ file: Form.jsx ~ line 9 ~ handlechange ~ params", params);
    setAge(params.target.value);
  }; //arslan4492
  // export default handleemail;
  return (
    <div>
      <h1>Form</h1>
      <Textcomp />
      <br />

      <input placeholder="Email" onChange={(event) => handlemail(event)} />
      <br />
      <br />
      <input placeholder="Address" onChange={(event) => handleaddress(event)} />
      <br />
      <br />
      <input placeholder="Age" onChange={(event) => handleage(event)} />
      <br />
      <br />
      <button onClick={() => handleClick()}>Click Me</button>
    </div>
  );
};
export default Form;
