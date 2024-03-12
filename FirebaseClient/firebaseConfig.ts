// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

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
  appId: "1:123865269750:web:e403626d5cc203fcf573d7",
  measurementId: "G-9DQMY8MLV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;