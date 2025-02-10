// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbH_MEGygx3MZCPxfYeaFoa_czy5Qo1to",
    authDomain: "donatyec-92fe5.firebaseapp.com",
    projectId: "donatyec-92fe5",
    storageBucket: "donatyec-92fe5.firebasestorage.app",
    messagingSenderId: "289235310427",
    appId: "1:289235310427:web:78e42a95e7b73d584fac7e"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export const authFirebase = getAuth();
export const dbFirebase = getFirestore (appFirebase);

export default appFirebase;