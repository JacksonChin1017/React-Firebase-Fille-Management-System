import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import {getFirestore, collection, serverTimestamp} from 'firebase/firestore'
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import {getStorage} from 'firebase/storage';



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
const firestore = getFirestore(app)

export const database = {
    users: collection(firestore, 'users'),
    date: serverTimestamp(),
};
  
export const storage = getStorage();

export const auth = getAuth(app);
export const createUser = createUserWithEmailAndPassword;
export const signInUser = signInWithEmailAndPassword;
export const authState = onAuthStateChanged;