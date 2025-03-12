import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0Zn6fks0nlkQCAjWLLumtMqMHSBwN0mY",
  authDomain: "electricitytracker-489ea.firebaseapp.com",
  projectId: "electricitytracker-489ea",
  storageBucket: "electricitytracker-489ea.firebasestorage.app",
  messagingSenderId: "58097682723",
  appId: "1:58097682723:web:a9ec1dbc45fc15db80e496",
  measurementId: "G-FSP7GKRDJ5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
