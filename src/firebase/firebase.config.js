// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsJWZ5s0zi8X-LIfiqchw9MlvDilG5Yn0",
  authDomain: "fir-new-auth-f2e73.firebaseapp.com",
  projectId: "fir-new-auth-f2e73",
  storageBucket: "fir-new-auth-f2e73.firebasestorage.app",
  messagingSenderId: "608137485199",
  appId: "1:608137485199:web:0ed85e892e3534c91d09fa",
  measurementId: "G-HSQPGE6BZM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
