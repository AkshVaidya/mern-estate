// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-51d80.firebaseapp.com",
  projectId: "mern-state-51d80",
  storageBucket: "mern-state-51d80.appspot.com",
  messagingSenderId: "1018436331812",
  appId: "1:1018436331812:web:bbd75ea47ad00167612bb1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
