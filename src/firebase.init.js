// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-iiZjqAxj_wIAXEJqnuRWM-QgzthonhQ",
    authDomain: "residential-hotel.firebaseapp.com",
    projectId: "residential-hotel",
    storageBucket: "residential-hotel.appspot.com",
    messagingSenderId: "619956092008",
    appId: "1:619956092008:web:ebb2314e980f2eb4828fdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth