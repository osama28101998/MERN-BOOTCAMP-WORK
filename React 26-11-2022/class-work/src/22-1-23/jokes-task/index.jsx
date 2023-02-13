import axios from "axios";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Blocks } from "react-loader-spinner";
const Jokes = () => {
  const [jokesdata, setjokesdata] = useState({ setup: "", punchline: "" });
  const [isLoading, setisLoading] = useState(false);
  const handleclick = async () => {
    try {
      setisLoading(true);
      const { data } = await axios.get(
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
      );

      setjokesdata({ setup: data.category, punchline: data.joke });

      setisLoading(false);
      toast.success("Successfully fetched joke", {
        iconTheme: { secondary: "white", primary: "green" },
        style: { backgroundColor: "blue", color: "white" },
      });
      // console.log(jokesdata);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Toaster />
      <div class="max-w-md py-4 px-8 text-white shadow-lg rounded-lg my-20 bg-blue-600 flex justify-center items-center">
        {isLoading == false ? (
          <div clas>
            <div class="flex  md:justify-start ">
              <img
                class="w-20 h-20 object-cover rounded-xl border-2 border-indigo-500"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              />
              <h1 className="text-3xl ml-24">
                title :{" "}
                {jokesdata.setup == ""
                  ? "Click on Emoji to show a joke"
                  : jokesdata.setup}
              </h1>
            </div>
            <div>
              <h2 class="text-3xl font-semibold">Pendline :</h2>
              <p class="mt-2 ">
                {jokesdata.punchline == ""
                  ? "No joke to show"
                  : jokesdata.punchline}
              </p>
            </div>
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
        <div class="flex justify-end mt-4">
          <svg
            onClick={handleclick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 cursor-pointer hover:bg-yellow-400"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Jokes;
