// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxyyf7J4mfIRhiS72vhED-d2kANHwHdX0",
    authDomain: "fes-nav-project.firebaseapp.com",
    projectId: "fes-nav-project",
    storageBucket: "fes-nav-project.firebasestorage.app",
    messagingSenderId: "141582356631",
    appId: "1:141582355631:web:02190177d5c4d6ac0f59d2",
    measurementId: "G-3SLT24RHQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)