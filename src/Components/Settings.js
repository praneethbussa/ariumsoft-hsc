import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../assets/Settings.css";
import { Route, Routes } from "react-router-dom";
import MyProfile from './MyProfile';
import ChangePassword from './ChangePassword';
const Settings = () => {
  return (
        <div className='setting-screen'>
            <Routes>
        
        <Route path="settings/myProfile" element={<MyProfile />} />
        <Route path="/settings/changePassword" element={<ChangePassword />}></Route>
       
      </Routes>
            <p className='setting-txt'>Settings</p>
        <Row>
            <Col md={4}>
                <Link style={{textDecoration:'none'}} to="myProfile"><div className='my-profile'>My Profile</div></Link>
                <Link style={{textDecoration:'none'}} to="changePassword"><div className='change-pwd'>Change Password</div></Link>
                <div className='log-out'>Log Out</div>
            </Col>
        </Row>
    </div>
  )
}

export default Settings