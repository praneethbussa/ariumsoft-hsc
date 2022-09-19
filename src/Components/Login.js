import React from "react";
import logo from "../Images/hsc-logo.svg";
import "../assets/Login.css";

export default function Login() {
    return(
        <>
        <div className="login-container">
            <img src={logo} alt="..." className="logoimg" /><br />
          <input type="text" placeholder="Username" className="input1"/> <br />
          <input type="password" placeholder="Password" className="input2"/><br />
          <p className="forget">Forget Password?</p>

        </div>
    </>
    )
    
}