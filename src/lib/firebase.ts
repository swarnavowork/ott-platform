import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCX1m7XJU73L77iSeL7-8oB-oCItbaqngM",

  authDomain:
    "neostream-be9d7.firebaseapp.com",

  projectId: "neostream-be9d7",

  storageBucket:
    "neostream-be9d7.firebasestorage.app",

  messagingSenderId:
    "799441604974",

  appId:
    "1:799441604974:web:4233eaa145be11007a317f",

  measurementId:
    "G-SDSKWVMYEX",
};

const app =
  initializeApp(firebaseConfig);

export const auth =
  getAuth(app);

export const googleProvider =
  new GoogleAuthProvider();