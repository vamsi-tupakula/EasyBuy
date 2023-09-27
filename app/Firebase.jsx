import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkmxRKwp-FkfeG7Edpz078b2XtbkRgNeU",
  authDomain: "easybuy-3e7f5.firebaseapp.com",
  projectId: "easybuy-3e7f5",
  storageBucket: "easybuy-3e7f5.appspot.com",
  messagingSenderId: "800210764588",
  appId: "1:800210764588:web:bb30a96ee609cb93c92289",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
