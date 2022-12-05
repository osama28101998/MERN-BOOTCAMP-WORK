import React, { useState } from "react";
import Address from "./form-components/address";
import Email from "./form-components/email";
import Feedback from "./form-components/feedback";
import Developername from "./form-components/name";
import Password from "./form-components/password";
import Satisfy from "./form-components/satisfied";
import Username from "./form-components/username";
const Devform = ({
  thankstatus,
  setdname,
  setusername,
  setemail,
  setpassword,
  setaddress,
  setfeedback,
  setisSatisfy,
}) => {
  //  const [developer_name, setdevelopername] = useState("");
  // const [user_name, setuser_name] = useState("");
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");
  // const [address, setaddress] = useState("");
  // const [feedback, setfeedback] = useState("");
  // const [isSatisfy, setisSatisfy] = useState("");
  // const [thanks, setthanks] = useState(false);

  return (
    <div>
      <Developername setdevelopername={(el) => setdname(el)} />
      {/* <Developername setdevelopername={(el) => setdevelopername(el)} /> */}

      <br />

      <Username setusername={(a) => setusername(a)} />

      <br />

      <Email setemail={(e) => setemail(e)} />

      <br />
      <Password password={(p) => setpassword(p)} />

      <br />

      <Address address={(a) => setaddress(a)} />
      <br />
      <Feedback feedback={(f) => setfeedback(f)} />

      <br />
      <Satisfy satisfy={(s) => setisSatisfy(s)} />
      <button
        className="btn btn-success"
        onClick={(event) => thankstatus(event)}
      >
        Submit
      </button>
    </div>
  );
};

export default Devform;
