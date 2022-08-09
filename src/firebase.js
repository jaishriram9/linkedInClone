import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdV4k-HaK4V0hSI7iaElSGbsS2KI7dhxc",
  authDomain: "linkedin-clone-4a2bb.firebaseapp.com",
  projectId: "linkedin-clone-4a2bb",
  storageBucket: "linkedin-clone-4a2bb.appspot.com",
  messagingSenderId: "124999618094",
  appId: "1:124999618094:web:2b15f3b3665ffb2e3b19bf",
};

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth();

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut
};
