// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fb465.firebaseapp.com",
  projectId: "mern-estate-fb465",
  storageBucket: "mern-estate-fb465.appspot.com",
  messagingSenderId: "875520238872",
  appId: "1:875520238872:web:9bcf6d1e673cebd3ed6a6d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);