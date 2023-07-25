// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDqi8Ba0wU0i4-5gvn6aDT6UhscJMsYcI",
  authDomain: "contact-curd-728c9.firebaseapp.com",
  projectId: "contact-curd-728c9",
  storageBucket: "contact-curd-728c9.appspot.com",
  messagingSenderId: "629377438319",
  appId: "1:629377438319:web:2c1e15b747bba79da8339a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);