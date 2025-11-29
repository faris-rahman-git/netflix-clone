import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyASvc-XabbNSGjcZ6hIkZa2_Pt9Yshw_AU",
  authDomain: "netflix-colne-37581.firebaseapp.com",
  projectId: "netflix-colne-37581",
  storageBucket: "netflix-colne-37581.firebasestorage.app",
  messagingSenderId: "884062118220",
  appId: "1:884062118220:web:5d08a1a31cf5fb500d2fe9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    toast.error("Email already in use.");
    toast.error("Password should be at least 6 characters.");
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    toast.error("Invalid email or password");
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, signup, login, logout };
