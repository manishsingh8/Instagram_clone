import React, { useEffect, useState } from "react";
import logo from "../Images/logo.png";
import "./signup.css";
import { Link } from "react-router-dom";
const SignUp = () => {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[userName,setUserName] = useState("");
  const[password, setPassword] = useState("");

  const postData =()=>{
     fetch('http://localhost:5000/signup',{
      method:'post',
      headers:{
        "Contect-Type":"application/json"
      },
      body:JSON.stringify({
        name:name,
        userName:userName,
        email:email,
        password:password
      })

     })
  }

  return (
    <div className="signup">
      <div className="form-container">
        <div className="form">
          <img src={logo} alt="logo" className="signup-logo" />
          <p className="loginPara">
            Sign Up to see the photos and videos <br /> from your friends.
          </p>
          <div className="input-field">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              name="fname"
              id="fname"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              placeholder="Full Name"
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              name="username"
              id="username"
              value = {userName}
              onChange={(e)=>{setUserName(e.target.value)}}
              placeholder="Username"
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              name="passowrd"
              id="passowrd"
              value ={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              placeholder="Password"
            />
          </div>
          <p className="loginPara" style={{ fontSize: "12px" }}>
            By sigining up, you agree to out Terms ,<br /> privacy policy and
            cookies policy.
          </p>
          <input
            type="submit"
            id="submit-btn"
            value="Sign Up"
            className="submit-btn"
            onClick={()=>{postData()}}
          />
          <Link to="/signin">
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                color: "rgba(var(--f52,142,142,142),1)",
                textAlign: "center",
                paddingBottom: "15px",
                cursor: "default",
              }}
            >
              Already have an Account?
              <span style={{ color: "#1729eb", cursor: "pointer" }}>
                SignIn
              </span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
