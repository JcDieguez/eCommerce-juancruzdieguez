// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5idBaHq0DUyKu4amMgt_oAd4fzfy9ezY",
  authDomain: "e-commerce-dieguez.firebaseapp.com",
  projectId: "e-commerce-dieguez",
  storageBucket: "e-commerce-dieguez.appspot.com",
  messagingSenderId: "288769157490",
  appId: "1:288769157490:web:c3c529cbe22ac6792f95eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);