import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export default function Showcars() {
  const { id } = useParams();
  const { data } = useQuery(
    "car-detail",
    async () => await axios.get(`http://localhost:9000/Cars/${id}`)
  );
  return (
    <div className="bg-blue-900 justify-center items-center flex h-screen ">
      <div className="bg-sky-600 p-5 rounded-xl flex flex-col items-center">
        {
          <div className="text-white">
            <p>Car id : {data?.data?.id}</p>
            <p>Car Maker : {data?.data?.maker}</p>
            <p>Car Model : {data?.data?.model}</p>
          </div>
        }
      </div>
    </div>
  );
}
