import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSiS1R7fQS0kP-ncpkevVS4BenE5c3A4I",
  authDomain: "todo-app-c000d.firebaseapp.com",
  projectId: "todo-app-c000d",
  storageBucket: "todo-app-c000d.appspot.com",
  messagingSenderId: "812108737283",
  appId: "1:812108737283:web:a54ff15c76410d37401736",
  measurementId: "G-XHZRW2NJQ2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
