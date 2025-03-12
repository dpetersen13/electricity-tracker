import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setMessage("Google Sign-In Successful!");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const emailSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage(`Welcome, ${email}!`);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const emailSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Account Created! Please log in.");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {message && <p>{message}</p>} {/* Display messages */}
      <button onClick={googleSignIn}>Sign in with Google</button>
      <br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={emailSignIn}>Login</button>
      <button onClick={emailSignUp}>Register</button>
    </div>
  );
};

export default Login;
