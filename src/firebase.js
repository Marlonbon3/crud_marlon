import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABRhTzx4GhYtKqp2DkJZShXZ87jrfu3nA",
  authDomain: "marlon-todo.firebaseapp.com",
  projectId: "marlon-todo",
  storageBucket: "marlon-todo.appspot.com",
  messagingSenderId: "702195727888",
  appId: "1:702195727888:web:03b09081b548fbdb0d1495"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)