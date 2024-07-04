import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAb7InOiFGMipmiC-Rti2gPYlxY6s5J85M",
  authDomain: "kisocore-0705.firebaseapp.com",
  projectId: "kisocore-0705",
  storageBucket: "kisocore-0705.appspot.com",
  messagingSenderId: "568801683004",
  appId: "1:568801683004:web:d0cf8792f880b85f64c539",
  measurementId: "G-F7M3JN88C2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
