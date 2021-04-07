import React, { useState } from "react";
import "./SignUp.css";
function SignUp() {
  const [signUp, setSignUp] = useState(true);
  return (
    <section className="login">
      <div className="loginContainer">
        <div className="form-toggle">
          <button className="toggleSignUp">Sign Up</button>
          <button className="toggleSignIn">Sign In</button>
        </div>
        {signUp ? (
          <div>
            <label>User Name</label>
            <input type="text" autoFocus required value="" />
            <label>Email</label>
            <input type="text" autoFocus required value="" />
            <p className="errorMsg"></p>
            <label>Password</label>
            <input type="text" autoFocus required />
            <p className="errorMsg"></p>
            <div className="btnContainer">
              <button className="signUp">Sign Up</button>
            </div>
            <button className="signUp">
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
              //   value={email}
              //   onChange={(event) => setEmail(event.target.value)}
            />
            <p className="errorMsg"></p>

            <label>Password</label>
            <input
              type="text"
              autoFocus
              required
              //   value={password}
              //   onChange={(event) => setPassword(event.target.value)}
            />
            <p className="errorMsg"></p>
            <div className="btnContainer">
              <button className="logIn">Log In </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SignUp;
