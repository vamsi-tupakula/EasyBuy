import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, firestore } from "../../app/Firebase";
import "./css/Login.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUserDetails } from "../features/productsSlice";
import { doc, setDoc } from "firebase/firestore";

function Login() {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.products.userId);
  const dispatch = useDispatch();
  const [login, setLogin] = useState(true);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!login) {
      createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
        .then(async (user) => {
          alert(
            "Account successfully created! please login to continue...."
          );
          const uid = user.user.uid;

          await setDoc(doc(firestore, "users", uid), {
            email: credentials.email,
            password: credentials.password,
            cart: [],
          });

          setLogin((p) => !p);
        })
        .catch((err) => alert(err.code));
    } else {
      signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      ).then((user) => {
        localStorage.setItem("userId", user.user.uid);
        dispatch(updateUserDetails(user.user.uid));
        navigate("/");
      }).catch(err => {
        alert("Invalid Login Credentials");
      });
    }
    setCredentials({ email: "", password: "" });
  };

  return (
    <div className="form__container flex">
      <form className="login__form flex flex-col" onSubmit={handleLogin}>
        <h1>{login ? "LOGIN" : "SIGN UP"}</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter your email..."
          value={credentials.email}
          onChange={(e) => {
            setCredentials((state) => ({ ...state, email: e.target.value }));
          }}
          autoComplete="off"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password..."
          value={credentials.password}
          onChange={(e) => {
            setCredentials((state) => ({ ...state, password: e.target.value }));
          }}
          autoComplete="off"
          required
        />
        <button className="btn" type="submit" disabled={!credentials.email || !credentials.password}>
          {login ? "Login" : "Sign Up"}
        </button>
        <p>
          {!login ? "Already " : "Don't "}
          have an account?{" "}
          <span className="link" onClick={() => setLogin((prev) => !prev)}>
            sign {!login ? "in" : "up"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
