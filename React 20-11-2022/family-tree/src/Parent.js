import Kid from "./Kid";

function parents(props) {
  // props.bacha.map((a, i) => {
  //   console.log(a.name);
  // });
  return (
    <div style={{ border: "5px solid", marginTop: "3%", borderColor: "blue" }}>
      <center>
        Husband : {props.childname}
        <br />
        <br />
        Wife : {props.childwife}
      </center>

      <div style={{ display: "flex", gap: "12px" }}>
        {props.bacha.map((e) => {
          return (
            <Kid
              name={e.name ?? "no kid yet"}
              gender={e.gender ?? "no kid yet"}
              dob={e.dob ?? "no kid yet"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default parents;
