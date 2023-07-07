import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUV9TIwGeO2pQW04PVYJbgiTnd4qLVQDg",
  authDomain: "application-7e8ad.firebaseapp.com",
  databaseURL: "https://application-7e8ad-default-rtdb.firebaseio.com",
  projectId: "application-7e8ad",
  storageBucket: "application-7e8ad.appspot.com",
  messagingSenderId: "919489617631",
  appId: "1:919489617631:web:b045c7020c9bffb56c136a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
