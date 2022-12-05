import React from "react";

const BmiTextfield = ({ placeholder, set }) => {
  return (
    <div class="p-3 border bg-light">
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          name=""
          id=""
          aria-describedby="helpId"
          placeholder={placeholder}
          onChange={(event) => set(event.target.value)}
        />
      </div>
    </div>
  );
};

export default BmiTextfield;
