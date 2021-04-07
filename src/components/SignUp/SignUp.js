import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import "./SignUp.css";
function SignUp({
  name,
  setName,
  user,
  setUser,
  email,
  setEmail,
  password,
  setPassword,
  emailError,
  setEmailError,
  passwordError,
  setPasswordError,
  signInWithGoogle,
  handleSignUp,
  handleSignIn,
  handleLogOut,
  hasAccount,
  setHasAccount,
}) {
  const [signUp, setSignUp] = useState(true);

  const [redirect, setredirect] = useState(null);

  //redirect user to dashboard if logged in

  useEffect(() => {
    if (user) {
      setredirect("/dashboard");
    }
  }, [user]);
  if (redirect) {
    return <Redirect to={redirect} />;
    // setredirect(null);
  }
  return (
    <section className="login">
      <div className="loginContainer">
        <div className="form-toggle">
          <button className="toggleSignUp" onClick={() => setSignUp(true)}>
            Sign Up
          </button>
          <button className="toggleSignIn" onClick={() => setSignUp(false)}>
            Sign In
          </button>
        </div>
        {signUp ? (
          <div>
            <label>Full Name</label>
            <input
              type="text"
              autoFocus
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              autoFocus
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <input
              type="text"
              autoFocus
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
              <button className="signUp" onClick={handleSignUp}>
                Sign Up
              </button>
            </div>
            <button className="signUp" onClick={signInWithGoogle}>
              <img
                src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
                alt="google icon"
              />
              <span> Sign Up with Google</span>
            </button>
          </div>
        ) : (
          <div>
            <label>Email</label>
            <input
              type="text"
              autoFocus
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <p className="errorMsg">{emailError}</p>

            <label>Password</label>
            <input
              type="text"
              autoFocus
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
              <button className="signIn" onClick={handleSignIn}>
                Log In{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SignUp;
