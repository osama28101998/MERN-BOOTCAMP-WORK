import React from "react";
import { useState } from "react";

export default function Colortask() {
  const [color, setcolor] = useState("white");
  const handleDark = () => {
    setcolor("black");
  };
  const handlelight = () => {
    setcolor("white");
  };
  let arr = [
    {
      id: 1,
      color: "#FF0000",
      name: "red",
    },
    {
      id: 2,
      color: "#0000FF",
      name: "blue",
    },
    {
      id: 3,
      color: "#FFC0CB",
      name: "pink",
    },
    {
      id: 4,
      color: "#000000",
      name: "black",
    },
    {
      id: 5,
      color: "#00FF00",
      name: "green",
    },
  ];
  return (
    <div className="h-screen" style={{ backgroundColor: color }}>
      <div>
        {arr.map((m) => (
          <div
            className="border 2 text-white w-64"
            style={{ backgroundColor: m.color }}
          >
            {m.name}
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center space-x-2">
        <button
          onClick={handleDark}
          className="bg-black text-white border-white border-4 rounded-sm  px-2 py-2"
        >
          Dark Mode
        </button>
        <button
          onClick={handlelight}
          className="border-4 px-2 py-1 border-black bg-white"
        >
          Light Mode
        </button>
      </div>
    </div>
  );
}
