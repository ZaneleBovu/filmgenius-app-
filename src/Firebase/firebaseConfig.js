import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Fixed: storageBucket typo (should end in .com, not .app)
const firebaseConfig = {
  apiKey: "AIzaSyCdoTetaJI_6wBJdhRJS9uitnoAWvnFkb4",
  authDomain: "filmgenius-app.firebaseapp.com",
  projectId: "filmgenius-app",
  storageBucket: "filmgenius-app.appspot.com",
  messagingSenderId: "644803155744",
  appId: "1:644803155744:web:58d4f46598a34e43136945"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export auth so you can use it in signup/login
export const auth = getAuth(app);
export const db = getFirestore(app);
