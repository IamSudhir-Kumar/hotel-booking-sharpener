// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfRfLSVLn86wNBt9Go5gmnxm9NQzcPWq8",
  authDomain: "assignment-14ae6.firebaseapp.com",
  databaseURL: "https://assignment-14ae6-default-rtdb.firebaseio.com",
  projectId: "assignment-14ae6",
  storageBucket: "assignment-14ae6.appspot.com",
  messagingSenderId: "453529565392",
  appId: "1:453529565392:web:3d867a26bcc6bcfa5a46d5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
