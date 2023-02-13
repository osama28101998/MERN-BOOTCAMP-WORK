import { computeHeadingLevel } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [Expenses, setExpenses] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [expenseSum, setexpenseSum] = useState(0);
  const [updateItem, setupdateItem] = useState("");
  const [updatePrice, setupdatePrice] = useState("");
  const [id, setid] = useState("");
  const [search, setsearch] = useState("");
  const user = useSelector((state) => state.user);
  const getExpenses = async () => {
    setisLoading(true);
    const { data } = await axios.post(
      "http://localhost:9000/expense/getexpense",
      {
        id: user[0]._id,
      }
    );
    console.log("🚀  ~ file: index.jsx:22 ~ getExpenses ~ data", data);

    setExpenses(data);
    setisLoading(false);
    let sum = 0;
    data.map((m) => (sum = sum + parseInt(m.price)));
    setexpenseSum(sum);
    toast.success(
      data.length > 0 ? "successfully fetched" : "no expense found"
    );
  };

  const handledelete = async (props) => {
    // setisLoading(true);
    const { data } = await axios.delete(
      "http://localhost:9000/expense/delexpense/" + props
    );
    console.log(data);
    getExpenses();
  };
  useEffect(() => {
    getExpenses();
  }, []);

  const handleDate = async (props) => {
    console.log("🚀  ~ file: index.jsx:50 ~ handleDate ~ user", user);

    setisLoading(true);
    const { data } = await axios.post(
      "http://localhost:9000/expense/getexpensebydate/" + props,
      {
        id: user[0]._id,
      }
    );
    setisLoading(false);
    setExpenses(data);
    let sum = 0;
    data.map((m) => (sum = sum + parseInt(m.price)));
    setexpenseSum(sum);
    console.log(data);
  };
  const handleEdit = (params) => {
    const { _id, item, price, userid, date } = params;
    navigate(`/editexpense/${_id}/${item}/${price}/${userid}/${date}`);
  };

  const handleSearch = async (params) => {
    const { data } = await axios.post(
      "http://localhost:9000/expense/searchexpense",
      {
        userid: user[0]._id,
        value: params,
      }
    );
    if (data.length > 0) {
      console.log("🚀  ~ file: index.jsx:99 ~ handleSearch ~ data", data);
      setExpenses(data);
      let sum = 0;
      data.map((m) => (sum = sum + parseInt(m.price)));
      setexpenseSum(sum);
    } else {
      const { message, alldata } = data;
      //  toast.error(message);
      setExpenses(alldata);
      let sum = 0;
      alldata.map((m) => (sum = sum + parseInt(m.price)));
      setexpenseSum(sum);
    }
  };

  // bg-[url('https://babel-cloud.sfo2.cdn.digitaloceanspaces.com/uploads/content/bf5cc17d82c0b1a6d9dbd8476236ea3e.jpg')]
  return (
    <div className=" bg-gray-200 h-screen">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen opacity-75">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <div className="sm:px-6 w-full">
          <div className="px-4 md:px-10 py-4 md:py-7">
            <div className="lg:flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Total Expenses : {expenseSum}
              </p>
              <div className="flex items-center mt-4 md:mt-0 md:ml-3 lg:ml-0">
                <h1 className="sm:text-lg md:text-xl lg:text-2xl text-base font-bold leading-normal text-gray-800">
                  Date Filter
                </h1>
                <div className="w-40 py-2 px-3 bg-white lg:ml-3 border rounded border-gray-200">
                  <input
                    type="date"
                    onChange={(e) => handleDate(e.target.value)}
                    className="w-full text-sm leading-3 text-gray-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="md:flex items-center mt-6 lg:mt-0">
                <div className="flex items-center">
                  <div className="flex items-center pl-3 bg-white border w-64 rounded border-gray-200">
                    <svg
                      className="text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M8.33333 13.1667C11.555 13.1667 14.1667 10.555 14.1667 7.33333C14.1667 4.11167 11.555 1.5 8.33333 1.5C5.11167 1.5 2.5 4.11167 2.5 7.33333C2.5 10.555 5.11167 13.1667 8.33333 13.1667Z"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5 17.5L12.5 12.5"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="text"
                      onChange={(event) => handleSearch(event.target.value)}
                      className="py-2.5 pl-1 w-full focus:outline-none text-sm rounded text-gray-600 placeholder-gray-500"
                      placeholder="Search"
                    />
                  </div>
                  <button
                    onClick={handleSearch}
                    className="text-white inline-flex ml-1.5 items-start justify-start px-4 py-2 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white px-4 md:px-8 xl:px-10 overflow-y-scroll h-[26rem]">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="h-20 w-full text-sm leading-none text-gray-600">
                  <th className="font-bold text-2xl  text-left pl-4">#</th>
                  <th className="font-bold text-2xl text-left pl-11">
                    Expense
                  </th>
                  <th className="font-bold text-2xl text-left pl-10">Date</th>
                  <th className="font-bold text-2xl text-left">Price</th>

                  <th className="font-bold text-2xl text-left w-32">Actions</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {Expenses.length > 0 ? (
                  Expenses.map((expenses, index) => (
                    <tr className="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-100">
                      <td className="pl-4">{index + 1}</td>
                      <td className="pl-11">
                        <div className="flex items-center">
                          <img
                            className="shadow-md rounded-full w-10 h-10 mr-3"
                            src="https://cdn-icons-png.flaticon.com/512/5501/5501375.png"
                          />
                          {expenses.item}
                        </div>
                      </td>
                      <td>
                        <p className="mr-16 pl-10">
                          {expenses.date.split("T")[0]}
                        </p>
                      </td>
                      <td>
                        <p className="mr-16">{expenses.price}</p>
                      </td>

                      <td>
                        <div className="flex items-center">
                          <button
                            onClick={() => handleEdit(expenses)}
                            className="bg-blue-500 mr-3 hover:bg-blue-800 py-2.5 px-5 rounded text-sm leading-3 text-white focus:outline-none"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handledelete(expenses._id)}
                            className="bg-red-500 mr-5 hover:bg-red-800 py-2.5 px-5 rounded text-sm leading-3 text-white focus:outline-none"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    {" "}
                    <h1 className="font-bold text-3xl"> No Expense Found</h1>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
