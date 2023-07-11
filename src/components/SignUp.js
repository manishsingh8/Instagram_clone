import React, { useEffect, useState } from "react";
import logo from "../Images/logo.png";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; //to show the error message


  const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // toast function
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  
    const postData = () => {
    // checking email with regex
    if (!emailRegex.test(email)) {
      notifyA("Invalid Email");
      return;
    } else if (!passRegex.test(password)) {
      notifyA(
        "password must contain 8 charecter including 1 Uppercase, 1 lowercase, 1 number and one special charecter"
      );
      return;
    }

    fetch("http://localhost:5000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        userName: userName,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notifyA(data.error); //error message
        } else {
          navigate("/signin"); //navigate to signin after successfull registration
          notifyB(data.message); //success message
        }
        console.log(data);
      });
  };

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
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Full Name"
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              name="userName"
              id="username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder="Username"
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
            onClick={() => {
              postData();
            }}
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
