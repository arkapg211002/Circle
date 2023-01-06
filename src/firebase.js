import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA6GDBBfvhlfp354Onk3cKf2oIiXlVISUA",
    authDomain: "unichat-2018e.firebaseapp.com",
    projectId: "unichat-2018e",
    storageBucket: "unichat-2018e.appspot.com",
    messagingSenderId: "192985195221",
    appId: "1:192985195221:web:bcfe3033634d98e722b85c"
  };

export const auth = firebase.initializeApp(firebaseConfig).auth();