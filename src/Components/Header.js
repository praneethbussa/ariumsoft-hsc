import React, {useState} from "react";
import logo from "../Images/hsc-logo.jpg";
import { Row,Col } from "react-bootstrap";
import profileImg from "../Images/profileImg.jpg"
import { Link, useLocation } from "react-router-dom";
import "../assets/Header.css";

const Header = (props) => {
    const location = useLocation();
  return props.isLogin ? (
    <div className="d-flex flex-row position-relative">
        <div className="col-md-2">
        <img src={logo} alt="..." className="imglogo" /> 
        </div>
        <div className="col-md-10 bg-white box1">
        <Link to="myProfile"><img src={profileImg} alt="..." className="img-profile" /></Link>
        <Link to="notifications">
        <i className={`fa-solid fa-bell notify ${location?.pathname == "/notifications" ? "headerActive" : ""}`}></i></Link>
       <Link to= "settings">
       <i className={`fa-solid fa-gear settings ${location?.pathname == "/settings" ? "headerActive" : ""}`}></i>
       </Link>
        </div>
    </div>
  ) : (
    <div className="d-flex flex-row position-relative">
        <div className="col-md-2">
        <img src={logo} alt="..." className="imglogo" />   
        </div>
        <div className="col-md-10 bg-white box2">
        <img src={logo} alt="..." className="imglogo" />    
        </div>
    </div>
  );
};

export default Header;
