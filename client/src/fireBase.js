// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b0225.firebaseapp.com",
  projectId: "mern-estate-b0225",
  storageBucket: "mern-estate-b0225.appspot.com",
  messagingSenderId: "658457409602",
  appId: "1:658457409602:web:dfe9b6200f230ecccbd5db",
  measurementId: "G-KVBJ4HK5T3"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
