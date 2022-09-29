import React from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../assets/ChangePassword.css";
import { FloatingLabel } from "react-bootstrap";

const ShowHideLabel = ({name, label, placeholder}) => {
    const [isVisible, setVisible] = useState(false);
    const togglePassword = () => {
        setVisible(!isVisible);
      };
    return (
        <>
        <div className="changing-pwd">
            <FloatingLabel label={label}>
              <input
                type={!isVisible ? "password" : "text"} name={name} placeholder={placeholder}
                class="form-control"
                
              />
              <span className="eyeclick-icon" onClick={togglePassword}>
                {!isVisible ? (
                  <i className="fa-sharp fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </span>
            </FloatingLabel>
          </div>
        </>
    );
}

const ChangePassword = () => {
  return (
    <div className="col-md-10 pwd-change">
      <Row>
        <Col md={10}>
          <p className="pwd-text">Change Password</p>
        </Col>
        <Col md={2}>
          <span>
            <button type="text" className="save-button">
              Save
            </button>
          </span>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
        <ShowHideLabel name="password" label="Type Old Password" placeholder="Type Old Password"/>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
        <ShowHideLabel name="password" label="Enter New Password" placeholder="Enter New Password"/>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
        <ShowHideLabel name="password" label="Confirm New Password" placeholder="Confirm New Password"/>
        </Col>
      </Row>
    </div>
  );
};

export default ChangePassword;
