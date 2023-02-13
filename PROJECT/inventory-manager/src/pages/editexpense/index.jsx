import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Editpage = () => {
  const navigate = useNavigate();
  const data = useParams();
  const [newexpense, setnewexpense] = useState({
    expenseid: data.id,
    item: data.item,
    price: data.price,
    date: data.date,
  });
  console.log("🚀  ~ file: index.jsx:6 ~ Editpage ~ route Editdata", data);
  const updateExpense = async () => {
    const { data } = await axios.put(
      "http://localhost:9000/expense/editexpense",
      newexpense
    );
    toast.success(data);
    navigate("/");
  };
  const handleCancel = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex items-center justify-center  sm:px-6 lg:px-8 bg-gray-200 h-screen">
        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10 shadow-2xl shadow-black">
            <h1 className="text-center text-base font-bold ">
              Edit Expense Form
            </h1>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <div className="mt-1">
                <input
                  // readOnly={false}
                  onChange={(e) =>
                    setnewexpense({
                      ...newexpense,
                      date: e.target.value,
                    })
                  }
                  type="date"
                  //   value={data.date.split("T")[0]}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Item
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) =>
                    setnewexpense({
                      ...newexpense,
                      item: e.target.value,
                    })
                  }
                  type="text"
                  readOnly={false}
                  value={newexpense.item}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <div className="mt-1">
                <input
                  // readOnly={false}
                  onChange={(e) =>
                    setnewexpense({
                      ...newexpense,
                      price: e.target.value,
                    })
                  }
                  type="number"
                  value={newexpense.price}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                onClick={updateExpense}
                type="button"
                className="flex mt-3 w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Update
              </button>
            </div>
            <div>
              <button
                onClick={handleCancel}
                type="button"
                className="flex mt-3 w-full justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editpage;
