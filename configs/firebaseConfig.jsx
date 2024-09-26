// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMxVHUQWv_GSbzIKGT9g8Dd6Pip_tD2_U",
  authDomain: "app01-2a625.firebaseapp.com",
  projectId: "app01-2a625",
  storageBucket: "app01-2a625.appspot.com",
  messagingSenderId: "68655334814",
  appId: "1:68655334814:web:4ee2f4e599bb6f019bc28f",
  measurementId: "G-FBH0ZHF6CF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);