import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,
    signOut
} from "firebase/auth";
import {
    setDoc,
    getFirestore,
    doc,
} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCuPy9LJvxGJUM0cZcwFhgpOm94yZHIzhI",
    authDomain: "react-native--mart.firebaseapp.com",
    projectId: "react-native--mart",
    storageBucket: "react-native--mart.appspot.com",
    messagingSenderId: "463846021611",
    appId: "1:463846021611:web:e12b5d855d9ad854afe1ae",
    measurementId: "G-5YRCQ5N8EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)

export {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,
    signOut, db, auth, setDoc,
    getFirestore,
    doc,
}