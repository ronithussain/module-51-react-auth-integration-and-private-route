// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjlx3ZVmoMrevajy8w_YBmDyqPcdufiGg",
  authDomain: "auth-moha-milon-62258.firebaseapp.com",
  projectId: "auth-moha-milon-62258",
  storageBucket: "auth-moha-milon-62258.firebasestorage.app",
  messagingSenderId: "1098497665818",
  appId: "1:1098497665818:web:dce9d80326924e1dcddaa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

