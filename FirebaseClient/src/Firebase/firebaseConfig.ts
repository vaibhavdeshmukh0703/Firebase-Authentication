// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZpnsI3VjliOVMsxeArG3ubjzA2nfhLWo",
  authDomain: "explore-firebase-e7bcc.firebaseapp.com",
  projectId: "explore-firebase-e7bcc",
  storageBucket: "explore-firebase-e7bcc.appspot.com",
  messagingSenderId: "123865269750",
  appId: "1:123865269750:web:de606b071559ddfdf573d7",
  measurementId: "G-N8SSVRH8LY"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;