import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const configSetup = {
  apiKey: "AIzaSyAHY3WBPdT26JVesJ0GFYTRhqOsQh_HDsU",
  authDomain: "fit-womens-weekly.firebaseapp.com",
  databaseURL: "https://fit-womens-weekly.firebaseio.com",
  projectId: "fit-womens-weekly",
  storageBucket: "",
  messagingSenderId: "413346277257",
  appId: "1:413346277257:web:c13b9270283d0118",
};

firebase.initializeApp(configSetup);

// Need to set up more