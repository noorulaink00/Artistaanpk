import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

// Create Firestore instance
const firestore = getFirestore(app); // Use getFirestore to get the firestore instance

export default firestore;
