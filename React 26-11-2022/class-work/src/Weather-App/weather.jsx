import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Components/input";
import { Blocks } from "react-loader-spinner";
export default function Weather() {
  const navigate = useNavigate();
  const [country, setcountry] = useState("");
  const [city, setcity] = useState("");
  const [loading, setloading] = useState(false);
  const handleclick = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      navigate(`/weather/show-weather/${country}/${city}`);
    }, 3000);
  };
  return (
    <div className="bg-blue-900 justify-center items-center flex h-screen ">
      {loading === false ? (
        <div className="bg-sky-600 p-5 rounded-xl flex flex-col items-center">
          <Input
            label="Country"
            placeholder="Country name"
            setstate={setcountry}
          />
          <br />
          <Input label="City" placeholder="Country City" setstate={setcity} />
          <br />

          <button
            onClick={handleclick}
            className="bg-green-600 text-white p-2 rounded-2xl hover:bg-orange-600 justify-center"
          >
            Check Wheather
          </button>
        </div>
      ) : (
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      )}
    </div>
  );
}
