// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADhxG7aSLuOoTYoFdZswDhX0g90kVGdTI",
  authDomain: "mern-book-inventory-a8f01.firebaseapp.com",
  projectId: "mern-book-inventory-a8f01",
  storageBucket: "mern-book-inventory-a8f01.appspot.com",
  messagingSenderId: "119092965898",
  appId: "1:119092965898:web:b58417a6743003acf5e5f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;