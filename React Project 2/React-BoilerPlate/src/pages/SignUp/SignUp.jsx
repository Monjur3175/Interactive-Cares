import React, { useEffect } from "react";
import Navbar from "../../component/Navbar";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
export default function SignUp() {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const { user, setUser } = useAuth();
  useEffect(() => {
    user?.email && navigate(from, { replace: true });
  }, [from, navigate, user?.email]);
  const firebaseConfig = {
    apiKey: "AIzaSyDI1lVxjqE4NZnNvqm0rvWROYkm_Gx8ZNQ",
    authDomain: "react-boiler-plate-project.firebaseapp.com",
    projectId: "react-boiler-plate-project",
    storageBucket: "react-boiler-plate-project.firebasestorage.app",
    messagingSenderId: "928977068786",
    appId: "1:928977068786:web:b5bddb3c89cc6fa0cde66b",
    measurementId: "G-CFSQFCYWMY",
  };

  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const signinUsingGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        const tempUser = {
          _id: user.uid,
          email: user.email,
          name: user.displayName,
          image: user.photoURL,
        };
        setUser(tempUser);
        console.log(token);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };
  return (
    <div>
      <Navbar />
      <button
        onClick={() => signinUsingGoogle()}
        className="bg-green-400 hover:bg-green-800 text-white rounded-md py-2 mt-10 px-4"
      >
        Sign In Using Google
      </button>
    </div>
  );
}
