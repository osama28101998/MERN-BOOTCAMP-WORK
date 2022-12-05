import React from "react";

const Satisfy = ({ satisfy }) => {
  return (
    <div>
      <div>Satisfied ?</div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="issatisfy"
          id="Yes"
          onChange={(event) => satisfy(event.target.id)}
        />
        <label class="form-check-label">Yes</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="issatisfy"
          id="No"
          onChange={(event) => satisfy(event.target.id)}
        />
        <label class="form-check-label">No</label>
      </div>
    </div>
  );
};

export default Satisfy;
