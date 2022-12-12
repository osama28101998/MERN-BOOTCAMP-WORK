import React from "react";
import { useState } from "react";
import { auth, provider } from "../services/firebase";

import {
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
export default function Index() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handlesubmit = async (event) => {
    event.preventDefault();
    try {
      // const auth = getAuth(app);
      let test = await signInWithEmailAndPassword(auth, email, password);
      console.log(test);
    } catch (error) {
      console.log(error.message);
    }
  };
  const googlelogin = (event) => {
    event.preventDefault();
    try {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          console.log(credential);
          const token = credential.accessToken;

          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;

          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        })

        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = provider.credentialFromError(error);
          // ...
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form>
      <div className="mt-10 flex justify-center items-center border h-screen bg-[url('/images/abc.jpg')] object-contain bg-no-repeat bg-cover">
        <center>
          <input
            onChange={(e) => setemail(e.target.value)}
            type="text"
            placeholder="Enter Email"
            className="border rounded-2xl px-2 py-2 w-80"
          />
          <br />
          <br />
          <input
            onChange={(e) => setpassword(e.target.value)}
            type="text"
            placeholder="Enter Password"
            className="border rounded-2xl px-2 py-2 w-80"
          />
          <br />
          <br />
          <button
            className="px-2 py-2 bg-green-500 rounded-2xl text-white hover:bg-blue-600 w-44"
            type="submit"
            onClick={handlesubmit}
          >
            Sign In
          </button>
          <br />
          <br />
          <button
            className="px-2 py-2 bg-red-500 rounded-2xl text-white hover:bg-neutral-800 w-44"
            type="submit"
            onClick={googlelogin}
          >
            Sign in with google
          </button>
        </center>
      </div>
    </form>
  );
}
