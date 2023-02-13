import React from "react";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Addcars() {
  const [maker, setmaker] = useState("");
  const [model, setmodel] = useState("");

  const { data } = useQuery(
    "cars",
    async () => await axios.get("http://localhost:9000/Cars")
  );
  const { mutate } = useMutation((data) =>
    axios.post("http://localhost:9000/Cars", data)
  );
  const handleclick = () => {
    console.log(maker + model);
    mutate({ maker, model });
  };

  const handleDelete = async (params) => {
    const result = await axios.delete(`http://localhost:9000/Cars/${params}`);

    console.log(result);
  };

  return (
    <div className="bg-blue-900 justify-center items-center flex h-screen ">
      <div className="bg-sky-600 p-5 rounded-xl flex flex-col items-center">
        <label className="text-white">Maker</label>
        <input type="text" onChange={(event) => setmaker(event.target.value)} />
        <br />
        <label className="text-white">Model</label>
        <input type="text" onChange={(event) => setmodel(event.target.value)} />
        <br />

        <button
          onClick={handleclick}
          className="bg-green-600 text-white p-2 rounded-2xl hover:bg-orange-600 justify-center"
        >
          Add
        </button>
      </div>
      <div className="bg-green-600 p-5 rounded-xl flex flex-col items-center">
        {data?.data?.map((m) => (
          <div className="flex bg-">
            <Link to={`/Cars/Details/${m.id}`}>
              {" "}
              <li key={m.id} className="text-yellow-500 ">
                {m.maker}
              </li>
            </Link>
            <button
              onClick={() => handleDelete(m.id)}
              className="bg-red-500 text-white px-2 py-2 rounded-xl ml-4"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
