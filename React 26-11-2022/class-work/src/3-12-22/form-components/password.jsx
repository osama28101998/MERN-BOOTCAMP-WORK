import React from "react";

const Password = ({ password }) => {
  return (
    <div>
      <div class="form-group">
        <label for="name">Password</label>
        <input
          type="password"
          class="form-control"
          name="password"
          id="password"
          placeholder="Enter password"
          onChange={(event) => password(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Password;
