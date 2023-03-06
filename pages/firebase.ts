// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC91DkXoAd9bCoRJmjrgJfnq9uAdOrmuSA",
  authDomain: "gilded-banking-ce371.firebaseapp.com",
  projectId: "gilded-banking-ce371",
  storageBucket: "gilded-banking-ce371.appspot.com",
  messagingSenderId: "828769833380",
  appId: "1:828769833380:web:334945fcb14bdce9ef3131"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}
