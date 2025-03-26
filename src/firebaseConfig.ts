// src/firebaseConfig.ts

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBccNfV2HiaQebNcM15kv_OJ1db0T6vNiw",
  authDomain: "polymind-7a0fc.firebaseapp.com",
  projectId: "polymind-7a0fc",
  storageBucket: "polymind-7a0fc.firebasestorage.app",
  messagingSenderId: "787989001402",
  appId: "1:787989001402:web:e36197347275f2cb597e83",
  measurementId: "G-8MWSSBM9F1"
};

const app = initializeApp(firebaseConfig);

// ✅ Export these properly
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBccNfV2HiaQebNcM15kv_OJ1db0T6vNiw",
//   authDomain: "polymind-7a0fc.firebaseapp.com",
//   projectId: "polymind-7a0fc",
//   storageBucket: "polymind-7a0fc.firebasestorage.app",
//   messagingSenderId: "787989001402",
//   appId: "1:787989001402:web:e36197347275f2cb597e83",
//   measurementId: "G-8MWSSBM9F1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);