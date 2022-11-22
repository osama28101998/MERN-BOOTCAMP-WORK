import Kid from "./Kid";
import Parents from "./Parent";
import Uncle from "./uncle";
import Data from "./familydata";
function grandparents() {
  let children;
  Data.map((a) => {
    children = a.children;
  });

  return (
    <div style={{ border: "5px solid", marginTop: "3%", borderColor: "red" }}>
      <center>
        Grand Father : Zia-ul-haq
        <br />
        <br />
        Grand Mother : Bibi
      </center>

      <div style={{ display: "flex", gap: "12px" }}>
        {children.map((x) => {
          return (
            <Parents
              childname={x.childname}
              childwife={x.childwife}
              bacha={x.children}
            />
          );
        })}

        {/* {<Uncle cname="Zafar Ali" cwname="Rehana" />} */}
      </div>
    </div>
  );
}

export default grandparents;
