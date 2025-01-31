import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHNQjFyY-ocmhtv8UpB-frmLUv_kqWcLE",
  authDomain: "beyondchats-268df.firebaseapp.com",
  projectId: "beyondchats-268df",
  storageBucket: "beyondchats-268df.firebasestorage.app",
  messagingSenderId: "711025365525",
  appId: "1:711025365525:web:b45421cb35cd50a82af41c",
  measurementId: "G-SD9XLJ2V7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
