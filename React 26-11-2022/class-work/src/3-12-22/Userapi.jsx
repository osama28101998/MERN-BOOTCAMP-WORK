import React, { useEffect, useState } from "react";

const Counter = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      GetUserdata();
    }, 2000);
  }, []);

  const GetUserdata = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      //    console.log(data);
      setState(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {state.length == 0 ? (
        <p>loading...</p>
      ) : (
        state.map((a) => {
          return (
            <div>
              <h1>Name : {a.name} </h1>
              <h2>User Name : {a.username}</h2>
              <h3>Address : {a.address.street}</h3>
              <h4>email : {a.email}</h4>
            </div>
          );
        })
      )}
    </div>
  );
};
export default Counter;
