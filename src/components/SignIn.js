import React, { useState } from "react";
import logo from "../Images/logo.png";
import "./signin.css";
import { Link ,useNavigate} from "react-router-dom";
import { toast } from "react-toastify"; //to show the error message



  const SignIn = () => {
  const navigate = useNavigate();  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Toast function
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);
  
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const postData = () => {
    // checking email with regex
    if (!emailRegex.test(email)) {
      notifyA("Invalid Email");
      return;
    } 
    // sending data to server
    fetch("http://localhost:5000/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notifyA(data.error); //error message
        } else {
          notifyB(data.message); //success message
          navigate("/"); //navigate to signin after successfull registration
        }
        console.log(data);
      });
  };

  return (
    <div className="signin">
      <div className="inner-div">
        <div className="logo-image">
          <img className="signin-logo" src={logo} alt="logo" />
        </div>
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
          <br />
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
        <input
          type="submit"
          id="submit-btn2"
          value="Sign In"
          onClick={()=>{postData()}}
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
