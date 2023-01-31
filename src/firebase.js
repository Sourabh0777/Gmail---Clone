// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyA6fLLkjoPNWGqMTarSZfTEEAWtjy_kVNo",
  authDomain: "fir-2e37d.firebaseapp.com",
  databaseURL: "https://fir-2e37d-default-rtdb.firebaseio.com",
  projectId: "fir-2e37d",
  storageBucket: "fir-2e37d.appspot.com",
  messagingSenderId: "563465309799",
  appId: "1:563465309799:web:bfedcdc45182f532d6cec2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// To sign in with a pop-up window, call signInWithPopup:

export { auth, db, provider };