import React from "react";

const Thanks = (props) => {
  console.log(props);
  return (
    <div>
      Thanks For your Feedback ....
      <br />
      Developer Name : {props.dname}
      <br />
      Developer Username : {props.username}
      <br />
      Developer Email : {props.demail}
      <br />
      Developer Password : {props.dpassword}
      <br />
      Developer Address : {props.daddress}
      <br />
      Developer Feedback : {props.dfeedback}
      <br />
      Satisfy ? :{" "}
      <span
        className={
          props.issatisfy == "Yes" ? "badge bg-success" : "badge bg-danger"
        }
      >
        {props.issatisfy == "Yes" ? "Satisfied" : "Unsatisfied"}
      </span>
    </div>
  );
};

export default Thanks;
