
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB-RWjPub19zabHkyL7QjOivFTyMrzd0g0",
  authDomain: "chatapp-18048.firebaseapp.com",
  projectId: "chatapp-18048",
  storageBucket: "chatapp-18048.firebasestorage.app",
  messagingSenderId: "483955104912",
  appId: "1:483955104912:web:9e9b4dd96d03dbe2048c15",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
