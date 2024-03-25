import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';



const firebaseConfig = {
  apiKey: "AIzaSyCXgyKYTjo1NvskmMFYHG2nMPFZ5JDMmjQ",
  authDomain: "file-management-system-21b57.firebaseapp.com",
  projectId: "file-management-system-21b57",
  storageBucket: "file-management-system-21b57.appspot.com",
  messagingSenderId: "676612984025",
  appId: "1:676612984025:web:e7c4c31a64546758b882c8",
  measurementId: "G-NMW0629B8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = {
    users: firestore.collection('users'),
    date: firebase.firestore.FieldValue.serverTimestamp(),
};
  
  export const storage = firebase.storage();
  
  export const auth = firebase.auth();