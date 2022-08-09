import React, { useState } from "react";
import "./Login.css";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/user/userSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const dispatch = useDispatch();

  const register = async () => {
    if (!name) {
      return alert("Please enter Full name!");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("user created===>>>>", cred.user);
        updateProfile(cred.user, {
          displayName: name,
          photoURL: profile,
        });
        dispatch(
          login({
            email: cred.user.email,
            uid: cred.user.uid,
            displayName: name,
            photoURL: profile,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email, password )
      .then((cred) => {
        console.log("cred", cred)
        dispatch(
          login({
            email: cred.user.email,
            uid: cred.user.uid,
            displayName: cred.user.displayName,
            photoURL: cred.user.photoURL,
          })
        );
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <img
        src="https://www.technipages.com/wp-content/uploads/2020/09/LinkedIn-Does-Not-Load-Images-fix.jpg"
        alt=""
      />
      <form>
        <input
          placeholder="Full Name (required if registering)"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="Profile Picture url (optional)"
          type="text"
          value={profile}
          onChange={(e) => {
            setProfile(e.target.value);
          }}
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a Member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
