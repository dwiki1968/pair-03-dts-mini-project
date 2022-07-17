import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: replace with your own config
const firebaseConfig = {
  apiKey: "AIzaSyCD4RpVpSY-S2kXvX9fDGc0b1WlIWHA6xA",
  authDomain: "mood-meter-94e8a.firebaseapp.com",
  projectId: "mood-meter-94e8a",
  storageBucket: "mood-meter-94e8a.appspot.com",
  messagingSenderId: "768329007337",
  appId: "1:768329007337:web:72e76e845b6944d09c3078",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
