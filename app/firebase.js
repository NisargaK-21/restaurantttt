// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPQ50PAnnXtBECcsLfL10anHL8_hSw-Ms",
  authDomain: "restaurant-cfebd.firebaseapp.com",
  projectId: "restaurant-cfebd",
  storageBucket: "restaurant-cfebd.firebasestorage.app",
  messagingSenderId: "612817521346",
  appId: "1:612817521346:web:963c1a40640a43d36ec95b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);