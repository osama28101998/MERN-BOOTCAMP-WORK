import ".././App.css";
import Devform from "./Developerform";
import Thanks from "./Thanks";
import { useState } from "react";

const MyApp = () => {
  const [thanks, setthanks] = useState(false);
  const [developer_name, setdevelopername] = useState("");
  const [user_name, setuser_name] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [address, setaddress] = useState("");
  const [feedback, setfeedback] = useState("");
  const [isSatisfy, setisSatisfy] = useState("");
  // const [thanks, setthanks] = useState(false);
  return (
    <div>
      {thanks == false ? (
        <Devform
          thankstatus={(el) => setthanks(el)}
          setdname={(e) => setdevelopername(e)}
          setusername={(s) => setuser_name(s)}
          setemail={(a) => setemail(a)}
          setpassword={(p) => setpassword(p)}
          setaddress={(sa) => setaddress(sa)}
          setfeedback={(sf) => setfeedback(sf)}
          setisSatisfy={(si) => setisSatisfy(si)}
        />
      ) : (
        <Thanks
          dname={developer_name}
          username={user_name}
          demail={email}
          dpassword={password}
          daddress={address}
          dfeedback={feedback}
          issatisfy={isSatisfy}
        />
      )}
    </div>
  );
};

export default MyApp;
