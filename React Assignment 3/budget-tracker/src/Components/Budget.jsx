import React from "react";

const Budget = () => {
  return (
    <div
      style={{
        border: "1px solid",
        padding: "5px",
        width: "30%",
        float: "left",
        marginRight: "20px",
        backgroundColor: "lightgray",
      }}
    >
      <p>
        Budget : 2000
        <button style={{ float: "right" }}>Edit</button>
      </p>
    </div>
  );
};

export default Budget;
