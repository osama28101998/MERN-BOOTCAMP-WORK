import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUiixrE_dRopyQJ178o9bZ0e8U-9ZyDk4",
  authDomain: "mern-bootcamp-fa865.firebaseapp.com",
  projectId: "mern-bootcamp-fa865",
  storageBucket: "mern-bootcamp-fa865.appspot.com",
  messagingSenderId: "1011845475637",
  appId: "1:1011845475637:web:d29c3d8dcf5ccbe2cf307c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
