import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

export default function Expenseform() {
  const user = useSelector((state) => state.user);

  const [date, setdate] = useState(null);
  const [item, setitem] = useState("");
  const [price, setprice] = useState(0);
  const handlesubmit = async () => {
    const { data } = await axios.post(
      "http://localhost:9000/expense/Addexpense",
      {
        date: date,
        item: item,
        price: price,
        userid: user[0]._id,
      }
    );
    if (data != "Error") {
      toast.success(data);
    } else {
      toast.error(data);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center  sm:px-6 lg:px-8  bg-gray-200 h-screen">
        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10 shadow-2xl shadow-black">
            <h1 className="text-center font-bold">Add Expense Form</h1>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setdate(new Date(e.target.value))}
                  type="date"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Item
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setitem(e.target.value)}
                  type="text"
                  autoComplete="current-password"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setprice(e.target.value)}
                  type="number"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                onClick={handlesubmit}
                type="submit"
                className="flex mt-3 w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
