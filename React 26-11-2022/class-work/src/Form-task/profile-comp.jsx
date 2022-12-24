import { React, useState } from "react";
import img from "./IMG_5244.JPG";

export default function Profilecomp() {
  const [Image, setImage] = useState(null);
  const [Name, setName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [Education, setEducation] = useState("");
  const [Address, setAddress] = useState("");
  const [Postal, setPostal] = useState("");
  const [Country, setCountry] = useState("");
  const [State, setState] = useState("");
  const handleclick = (event) => {
    console.log(event.target.files);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };
  return (
    <div>
      <form className="space-y-6" action="#" method="POST">
        <div className="bg-cyan-500 px-4 py-2 shadow sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <input
                // accept="image"
                hidden
                id="img-upload"
                type="file"
                onChange={(event) => handleclick(event)}
              />
              <label htmlFor="img-upload">
                <img
                  className="inline-block h-60 w-60 rounded-xl cursor-pointer"
                  src={Image || img}
                />
              </label>

              <div className="text-white flex justify-center -ml-44 ">
                {Name ? Name : "Name"}
                <br />
                {Mobile ? Mobile : "Mobile #"}
                <br />
                {Email ? Email : "Email id"}
                <br />
                {Education ? Education : "Education"}
                <br />
                {Address ? Address : "Address"}
                <br />
                {Country ? Country : "Country"}
                <br />
                {State ? State : "State"}
                <br />
                {Postal ? Postal : "Postal"}
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="h-10 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Surname
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="h-10 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mobile Number
                  </label>
                  <input
                    onChange={(event) => setMobile(event.target.value)}
                    type="text"
                    className="h-10 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email ID
                  </label>
                  <input
                    onChange={(event) => setEmail(event.target.value)}
                    type="text"
                    className="h-10 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Education
                  </label>
                  <input
                    type="text"
                    onChange={(event) => setEducation(event.target.value)}
                    className="h-10 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street Address
                  </label>
                  <input
                    onChange={(event) => setAddress(event.target.value)}
                    type="text"
                    className="h-10 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <input
                    onChange={(event) => setCountry(event.target.value)}
                    className="h-10 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Region
                  </label>
                  <input
                    onChange={(event) => setState(event.target.value)}
                    className="h-10 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Postal code
                  </label>
                  <input
                    onChange={(event) => setPostal(event.target.value)}
                    type="text"
                    className="h-10 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center mt-7">
            <button className="bg-purple-700 text-white px-3 py-3 rounded-md w-44">
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
