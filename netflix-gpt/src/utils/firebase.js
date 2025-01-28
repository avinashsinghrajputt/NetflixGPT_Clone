// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiaJKH-sV9YFiRbhoSnZylkfGiyncAym4",
  authDomain: "netflixgpt-a64d5.firebaseapp.com",
  projectId: "netflixgpt-a64d5",
  storageBucket: "netflixgpt-a64d5.firebasestorage.app",
  messagingSenderId: "107260491663",
  appId: "1:107260491663:web:d997ddde124b45ec4e7dfa",
  measurementId: "G-NGPH5KG6YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
