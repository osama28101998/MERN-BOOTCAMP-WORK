function kid(props) {
  return (
    <div
      style={{
        border: "5px solid",
        marginTop: "5%",
        borderColor: "green",
        width: "90%",
      }}
    >
      <center>
        Kid Name : {props.name} <br />
        <br />
        Kid Gender : {props.gender} <br />
        <br />
        Kid DOB : {props.dob}
      </center>
    </div>
  );
}

export default kid;
