import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";

export default function Dog() {
  const [imageurl, setimageurl] = useState("");
  useEffect(() => {
    setimageurl(
      "https://dog.ceo/api/breeds/image/randomhttps://images.dog.ceo/breeds/coonhound/n02089078_2829.jpg"
    );
  });
  const { data } = useQuery(
    "pics",
    async () => await axios.get("https://dog.ceo/api/breeds/image/random")
  );
  const handleclick = () => {
    console.log(data);

    setimageurl(data.data.message);
  };
  return (
    <div className="bg-blue-900 justify-center items-center flex h-screen ">
      <div className="bg-sky-600 p-5 rounded-xl flex flex-col items-center">
        <div className="mt-6">
          <img className="w-fit h-fit" src={imageurl} />
        </div>
        <div>
          <button
            onClick={() => handleclick()}
            className="bg-green-600 text-blue px-2 py-2 rounded-md text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
