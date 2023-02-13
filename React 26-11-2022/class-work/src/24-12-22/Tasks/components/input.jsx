import React from "react";

export default function Textfield({ label, placeholder, setstate }) {
  return (
    <div>
      <div>
        <label className="text-white">{label}</label>
        <input
          type={label.endsWith("Password") ? "password" : "text"}
          className="mt-2 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder={placeholder}
          onChange={(event) => setstate(event.target.value)}
        />
      </div>
    </div>
  );
}
