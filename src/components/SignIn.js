import React from "react";
import logo from "../Images/logo.png";
import "./signin.css";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="signin">
      <div className="inner-div">
        <div className="logo-image">
          <img className="signin-logo" src={logo} alt="logo" />
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="username or email"
            name="username"
            id="email"
          />
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            id="password"
          />
        </div>
        <input
          type="submit"
          id="submit-btn2"
          value="Sign In"
          className="submit-btn2"
        />
        <Link to="/signup">
          <p
            style={{
              fontSize: "15px",
              fontWeight: "600",
              color: "rgba(var(--f52,142,142,142),1)",
              textAlign: "center",
              padding: "0px 20px 15px 20px",
              cursor: "default",
            }}
          >
            Don't have an Account?
            <span style={{ color: "#1729eb", cursor: "pointer" }}>SignUp</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
