// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwiVX1dtv2jx0HCmgRDZl3CehHPjg5wLY",
  authDomain: "fir-react-starter-790e5.firebaseapp.com",
  projectId: "fir-react-starter-790e5",
  storageBucket: "fir-react-starter-790e5.appspot.com",
  messagingSenderId: "626937917092",
  appId: "1:626937917092:web:564e4d24bc56cb01df0031",
  measurementId: "G-CHC1PXVQYG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
