// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKCm_g21Gaf-O1DQnfKR2r2AZ02p_T34o",
  authDomain: "cansell-7356c.firebaseapp.com",
  projectId: "cansell-7356c",
  storageBucket: "cansell-7356c.appspot.com",
  messagingSenderId: "76226344504",
  appId: "1:76226344504:web:8b8478c187148834a018cd",
  measurementId: "G-WVCV30ZS28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth()