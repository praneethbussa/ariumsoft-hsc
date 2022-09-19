import React, {useState} from "react";
import logo from "../Images/hsc-logo.svg";
import profileImg from "../Images/profileImg.jpg"
import { Link, useLocation } from "react-router-dom";
import "../assets/Header.css";

const Header = (props) => {
    const location = useLocation();
  return props.isLogin ? (
    <div>
      <img src={logo} alt="..." className="imglogo" />
      <br />
      <span className="box1">
        <Link to="myProfile"><img src={profileImg} alt="..." className="img-profile" /></Link>
        <Link to="notifications">
        <i className={`fa-solid fa-bell notify ${location?.pathname == "/notifications" ? "headerActive" : ""}`}></i></Link>
       <Link to= "settings">
       <i className={`fa-solid fa-gear settings ${location?.pathname == "/settings" ? "headerActive" : ""}`}></i>
       </Link>
      </span>
    </div>
  ) : (
    <div>
      <img src={logo} alt="..." className="imglogo" />
      <br />
      <span className="box2">
        <i className="fa-solid fa-user" id="userIcon"></i>
      </span>
    </div>
  );
};

export default Header;
