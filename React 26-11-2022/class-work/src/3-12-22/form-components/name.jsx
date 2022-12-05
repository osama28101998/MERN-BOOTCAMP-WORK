const Developername = ({ setdevelopername }) => {
  return (
    <div>
      <div class="form-group">
        <label for="name">Developer Name</label>
        <input
          type="text"
          class="form-control"
          name="name"
          id="name"
          placeholder="Enter Name"
          onChange={(event) => setdevelopername(event.target.value)}
        />
      </div>
    </div>
  );
};
export default Developername;
