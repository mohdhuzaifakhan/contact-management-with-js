// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsHA7zYTh8vf6rvKDF-OVsUABo3jUPNM8",
    authDomain: "contact-management-app-d95f3.firebaseapp.com",
    projectId: "contact-management-app-d95f3",
    storageBucket: "contact-management-app-d95f3.appspot.com",
    messagingSenderId: "837517770386",
    appId: "1:837517770386:web:03d2bc6ac6adec064d704b",
    measurementId: "G-B8975SLJSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
