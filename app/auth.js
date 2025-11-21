"use client";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "./firebase";
import { getAuth } from "firebase/auth";


const auth = getAuth(app);
const db = getFirestore(app);

export async function createAccount(email, password) {

 
  try {
    let result = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(result.user);
   
    await setDoc(doc(db, "users", result.user.uid), {
      email: email,
      createdAt: new Date(),
    });

    return result;
  } catch (error) {
    console.log("SIGNUP ERROR:", error.code, error.message);
    return null;
  }
}


export async function login(email, password) {
  try {
    let result = await signInWithEmailAndPassword(auth, email, password);
    return result;
  } catch (error) {
    console.log("LOGIN ERROR:", error.code, error.message);
    return null;  
  }
}


export async function logout() {
  try {
    let result = await signOut(auth);
    return result;
  } catch (error) {
    console.log("LOGOUT ERROR:", error.code, error.message);
    return null;
  }
}

export async function resetEmail(email) {
  try {
    return await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log("RESET ERROR:", error.code, error.message);
    return null;
  }
}
