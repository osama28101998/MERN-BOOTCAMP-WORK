import React from "react";

const Feedback = ({ feedback }) => {
  return (
    <div>
      <div class="form-group">
        <label for="feedback">Feedback</label>
        <textarea
          class="form-control"
          name="feedback"
          id="feedback"
          rows="3"
          onChange={(event) => feedback(event.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Feedback;
