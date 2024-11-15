
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1yWzuyVwxaFeapMHePGs3CzSG0oOo3mM",
  authDomain: "edulanpage.firebaseapp.com",
  projectId: "edulanpage",
  storageBucket: "edulanpage.firebasestorage.app",
  messagingSenderId: "74553851534",
  appId: "1:74553851534:web:53e66af80bcef9f62253df"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;