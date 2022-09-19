import React from 'react';
import { Row, Col } from 'react-bootstrap';
import profile from '../Images/profileImg.jpg';
import "../assets/MyProfile.css";

const MyProfile = () => {
  return (
        <div className='profile-screen'>
            <p className='profile'>My Profile</p>
            <Row>
            <Col md={4}>
            <div className='recruiter-details'>
                    <Row>
                        <Col md={6}>
                    <div className='name-of-recruiter'>Mary Cassatt</div>
                    <div className='role-of-recruiter'>Senior Recruiter</div>
                    <div className='recruiter-mail'>marycassatt@hsc.com</div>
                    <div className='recruiter-contact'>+1 1234 567 890</div>
                    </Col>
                    <Col md={6}>
                    <img src= { profile} className='image-profile' alt='...' />
                        <button type='button' className='change-btn'>Change</button>
                    </Col>
                    </Row>
                    </div>
                    <Col md={12}>
                        <div className='name-edit'>
                            <div className='name-label'>Full Name</div>
                            <div className='full-name'>Mary Cassatt</div>
                        </div>
                        <div className='contact-edit'>
                            <div className='contact-label'>Contact Number</div>
                            <div className='full-num'>+1 1234 567 890</div>
                        </div>
                        <div className='mail-edit'>
                            <div className='mail-label'>Email</div>
                            <div className='full-mail'>+1 1234 567 890</div>
                        </div>
                        <div className='designation-edit'>
                            <div className='role-label'>Designation</div>
                            <div className='full-role'>Senior Recruiter</div>
                        </div>
                    </Col>
                    
            </Col>
        </Row>
        </div>

  )
}

export default MyProfile