import React from "react";

const Username = ({ setusername }) => {
  return (
    <div>
      <div class="form-group">
        <label for="name">Username</label>
        <input
          type="text"
          class="form-control"
          name="username"
          id="username"
          placeholder="Enter Username"
          onChange={(event) => setusername(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Username;
