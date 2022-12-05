import React from "react";

const BmiRadio = () => {
  return (
    <div class="p-3 border bg-light">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="" id="" />
        <label class="form-check-label" for="">
          Default radio
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name=""
          id=""
          checked
          disabled
        />
        <label class="form-check-label" for="">
          Default checked radio
        </label>
      </div>
    </div>
  );
};

export default BmiRadio;
