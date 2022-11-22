import Kid from "./Kid";
function uncle(props) {
  return (
    <div style={{ border: "5px solid", marginTop: "3%", borderColor: "blue" }}>
      <center>
        Husband : {props.cname}
        <br />
        <br />
        Wife : {props.cwname}
      </center>

      <div style={{ display: "flex", gap: "12px" }}>
        <Kid name="Meerab" gender="Female" dob="28-10-2007" />
        <Kid name="ahmed" gender="male" dob="28-10-1990" />
      </div>
    </div>
  );
}

export default uncle;
