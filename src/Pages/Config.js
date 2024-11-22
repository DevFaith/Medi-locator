// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAP-9o-obtk-WsnnjGg09XroqBFNvzOwf4",
    authDomain: "medilocator.firebaseapp.com",
    projectId: "medilocator",
    storageBucket: "medilocator.firebasestorage.app",
    messagingSenderId: "821100000645",
    appId: "1:821100000645:web:30552afa42adf6fdf140ec",
    measurementId: "G-H8CXHT321S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);