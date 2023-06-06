//import * as firebase from "firebase/app";
//import firebase from "firebase/app";

import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

//import "firebase/auth";
//import "firebase/firestore";
//import "firebase/storage";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATaT2h8r3cg0xSHyNw1GHjGFFAv2OoPog",
  authDomain: "artistaanpk-fd306.firebaseapp.com",
  databaseURL: "https://artistaanpk-fd306-default-rtdb.firebaseio.com",
  projectId: "artistaanpk-fd306",
  storageBucket: "artistaanpk-fd306.appspot.com",
  messagingSenderId: "641065876761",
  appId: "1:641065876761:web:868541db231b1140d55988",
  measurementId: "G-PJ00S8YN8M",
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
