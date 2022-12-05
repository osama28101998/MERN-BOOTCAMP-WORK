import React from "react";

const Email = ({ setemail }) => {
  return (
    <div>
      <div class="form-group">
        <label for="name">Email</label>
        <input
          type="email"
          class="form-control"
          name="email"
          id="email"
          placeholder="Enter Email"
          onChange={(event) => setemail(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Email;
