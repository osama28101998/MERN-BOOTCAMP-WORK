import React from "react";

const Address = ({ address }) => {
  return (
    <div>
      <div class="form-group">
        <label for="name">Address</label>
        <input
          type="text"
          class="form-control"
          name="address"
          id="address"
          placeholder="Enter Address"
          onChange={(event) => address(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Address;
