// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

export const googleProvider = new GoogleAuthProvider();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQjSV0tSPugioFy0duWpiAKGoTP9zCtD8",
    authDomain: "muxic-2a9f3.firebaseapp.com",
    projectId: "muxic-2a9f3",
    storageBucket: "muxic-2a9f3.appspot.com",
    messagingSenderId: "1072955184013",
    appId: "1:1072955184013:web:9126feb9ef52a4fb5aa3c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);