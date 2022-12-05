import React from "react";

const Input = ({ label, set, value }) => {
  return (
    <div class="col-md-6">
      <label for="validationCustom01" class="form-label">
        {label}
      </label>
      <input
        type="text"
        class="form-control"
        value={value}
        onChange={(event) => set(event.target.value)}
      />
    </div>
  );
};

export default Input;
