import React from "react";

const Addexpense = () => {
  return (
    <div>
      <div
        style={{
          width: "20%",
          float: "left",
          marginRight: "50px",
        }}
      >
        Name <br />
        <input type="text" />
      </div>
      <div
        style={{
          width: "20%",
          float: "left",
          marginRight: "20px",
        }}
      >
        Cost
        <br />
        <input type="text" />
        <br /> <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div style={{ float: "left" }}>
        <button>Save</button>
      </div>
    </div>
  );
};

export default Addexpense;
