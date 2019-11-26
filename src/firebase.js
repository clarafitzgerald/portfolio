import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDq3oaS_2IvCk6yO8Vnp6l4Ax0uBoxROnQ",
  authDomain: "portfolio-71668.firebaseapp.com",
  databaseURL: "https://portfolio-71668.firebaseio.com",
  projectId: "portfolio-71668",
  storageBucket: "portfolio-71668.appspot.com",
  messagingSenderId: "919300746079",
  appId: "1:919300746079:web:437ba113bd5e13a39ee4ea",
  measurementId: "G-4Q6TCM0GJX"
};

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();

export default firebase;
