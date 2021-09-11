import firebase from "firebase/app" // get the basic app module from firebase
import "firebase/auth" // get authentication module
import "firebase/firestore" // get firestore which is database
import "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBm6sXE2HQW19Zk8DJBI7aiqPihq3X_l5E",
    authDomain: "reels-f9af9.firebaseapp.com",
    projectId: "reels-f9af9",
    storageBucket: "reels-f9af9.appspot.com",
    messagingSenderId: "611672565731",
    appId: "1:611672565731:web:b5ac4411264b9c857022d6"
  };

firebase.initializeApp(firebaseConfig); // connection of firebase with react App