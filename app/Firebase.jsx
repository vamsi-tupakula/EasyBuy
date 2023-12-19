import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADDBlW_mK9Tk0YCg1TMUyovG55E6xys5U",
  authDomain: "easybuy-ca544.firebaseapp.com",
  projectId: "easybuy-ca544",
  storageBucket: "easybuy-ca544.appspot.com",
  messagingSenderId: "410489133570",
  appId: "1:410489133570:web:bac497a442b9953cea651b",
  measurementId: "G-B8ZQG4SHG3"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
