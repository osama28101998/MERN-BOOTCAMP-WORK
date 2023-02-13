import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="justify-center items-center flex  fixed inset-0 z-50 h-screen outline-none focus:outline-none bg-slate-300">
      {/*content*/}
      <div className="rounded-3xl shadow-2xl mx-8 flex flex-col w-full bg-white p-2 container">
        <div className="flex justify-end ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6  hover:bg-red-500 hover:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        {/*header*/}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Your Climate Impact</h3>
        </div>
        <div className="flex items-end justify-end">
          <p className="text-xs -mt-10 px-2 py-1 rounded-2xl bg-blue-900 text-white ">
            Powered by carbon click
          </p>
        </div>
        {/*body*/}
        <div className="relative px-1 flex-auto -mt-10">
          <p className="my-4 text-slate-500 text-sm leading-relaxed">
            Our Friends At Carbonclock Have Estimated The Carbon Footprint of
            Shipping Your Order To Be:
          </p>
          <div className="rounded-lg border-2 border-dotted border-green-600 ">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-4">
              <div class=" rounded-md flex items-center justify-center">
                <div className="flex flex-col">
                  <div className="rounded-full bg-green-400 w-20 h-20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-200 flex items-center justify-center"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                      />
                    </svg>
                  </div>
                  <div className="text-green-900 font-bold flex-col flex text-xl">
                    <p>96 LBS</p>
                    <p>Of C02 Emissions</p>
                  </div>
                </div>
              </div>
              <div class=" rounded-md flex items-center justify-center">
                <div>
                  <h1 className="text-sm">OR</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>
                </div>
              </div>
              <div class="rounded-md flex items-center justify-center">
                <div>
                  <div className="rounded-full -ml-3 bg-yellow-500 w-20 h-20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6  text-gray-200 flex items-center justify-center"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                      />
                    </svg>
                  </div>
                  <div className=" text-green-900 font-bold text-xl">110</div>
                  <div>Miles Driven</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="my-4 text-slate-500 text-sm text justify leading-relaxed">
              By Checking The Box You Will Directing Your Money to the tri city
              Forest,offsetting the amount of C02 Created By Your Order.{" "}
              <span className="font-bold text-base underline text-green-700">
                READ MORE
              </span>
            </p>
          </div>
          <div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
              <img
                src="https://media.istockphoto.com/id/535695503/photo/pakistan-monument-islamabad.jpg?s=612x612&w=0&k=20&c=bNqjdf8L-5igcRB89DdMgx0kNOmyeo1J_zzXmoxxl8w="
                alt=""
                className="h-44 w-full "
              />
              <img
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                alt=""
                className="h-44 w-full "
              />
              <img
                src="https://media.istockphoto.com/id/1368264124/photo/extreme-close-up-of-thrashing-emerald-ocean-waves.jpg?b=1&s=170667a&w=0&k=20&c=qha_PaU54cu9QCu1UTlORP4-sW0MqLGERkdFKmC06lI="
                alt=""
                className="h-44 w-full  "
              />
            </div>
          </div>
        </div>
        {/*footer*/}
        <div className="flex items-center justify-center w-full h-full mt-2  ">
          <button
            className="hover:bg-green-900 text-white bg-green-500 rounded-xl font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-[100ms]"
            type="button"
          >
            Add To Your Offset Your Carbon Footprint
          </button>
        </div>
      </div>
    </div>
  );
}
