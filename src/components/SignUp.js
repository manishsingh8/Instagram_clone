import React from "react";
import logo from "../Images/logo.png";
import './signup.css';
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="signup">
      <div className="form-container">
        <div className="form">
        <img src={logo} alt="logo" className="signup-logo" />
        <p className="loginPara">
          Sign Up to see the photos and videos <br /> from your friends.
        </p>
        <div className="input-field">
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="input-field">
          <input type="text" name="fname" id="fname" placeholder="Full Name" />
        </div>
        <div className="input-field">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            name="passowrd"
            id="passowrd"
            placeholder="Password"
          />
        </div>
        <p className="loginPara" style={{fontSize:"12px"}}>
          By sigining up, you agree to out Terms ,<br/> privacy policy and cookies policy.
        </p>
        <input type="submit" id="submit-btn" value="Sign Up" className="submit-btn" />
        <Link to="/signin">
          <p style={{fontSize:"15px",fontWeight:"600",color:"rgba(var(--f52,142,142,142),1)",textAlign:"center",paddingBottom:"15px",cursor:"default"}}>
            Already have an Account?
          <span style={{color:"#1729eb",cursor:"pointer"}}>SignIn</span></p>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
