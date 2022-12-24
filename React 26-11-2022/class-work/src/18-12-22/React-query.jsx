import React from "react";
import { useQuery } from "react-query";

const Reactquery = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("http://localhost:9000/Cats").then((res) => res.json())
  );

  return (
    <div>
      {data.map((m) => (
        <div>
          <img src={m.image} class="rounded-full w-32" alt="Avatar" />
          <h1>{m.catname}</h1>
          <h1>{m.catcolor}</h1>
        </div>
      ))}
    </div>
  );
};

export default Reactquery;
