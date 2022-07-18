import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

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

const signUpReq = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(
      "User yang teregistrasi dan berhasil login adalah",
      response.user
    );
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
    alert(
      err.message
        .replace(/-/g, " ")
        .replace(/Firebase:/g, "")
        .replace("auth/", "")
    );
  }
};

const signOutReq = async () => {
  try {
    await signOut(auth);
    console.log("berhasil log out");
  } catch (err) {
    console.log(err);
    console.log("gagal log out");
  }
};

export { auth, signUpReq, signOutReq };
