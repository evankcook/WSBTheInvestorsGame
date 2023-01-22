import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNjEatf5kP3XSjgHgagVWUSPGM9Vs2xZo",
  authDomain: "wallstreetbetsgame.firebaseapp.com",
  projectId: "wallstreetbetsgame",
  storageBucket: "wallstreetbetsgame.appspot.com",
  messagingSenderId: "1071263267944",
  appId: "1:1071263267944:web:2d08505b152e014f9d8fdd",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
