import React from 'react';
import "../assets/Notifications.css";
import { Row,Col } from 'react-bootstrap';

const Notifications = () => {
  return (
    <div className='notification-screen'>
        <div className='notification-text'>Notifications</div>
    <Row>
        <Col md={4}>
       <div className='notification-list1'>
        <div className='notification1'>Ray assigned facebook job opening to you</div>
        <span className='notification-time'>2:45pm</span>
         <span className='notification-date'>22-09-2022</span>
       </div>
        </Col> 
    </Row>

    <Row>
        <Col md={4}>
       <div className='notification-list2'>
        <div className='notification2'>Hennry successfully completed 2nd round of the interview</div>
        <span className='notification-time'>2:45pm</span>
         <span className='notification-date'>22-09-2022</span>
       </div>
        </Col> 
    </Row>

    <Row>
        <Col md={4}>
       <div className='notification-list3'>
        <div className='notification3'>Emili assigned java developer position for meta</div>
        <span className='notification-time'>2:45pm</span>
         <span className='notification-date'>22-09-2022</span>
       </div>
        </Col> 
    </Row>

    <Row>
        <Col md={4}>
       <div className='notification-list4'>
        <div className='notification4'>Peter hains assigned tesla job opening to you</div>
        <span className='notification-time'>2:45pm</span>
         <span className='notification-date'>22-09-2022</span>
       </div>
        </Col> 
    </Row>

    <Row>
        <Col md={4}>
       <div className='notification-list5'>
        <div className='notification5'>Peter hains assigned ux/ui position for nissan</div>
        <span className='notification-time'>2:45pm</span>
         <span className='notification-date'>22-09-2022</span>
       </div>
        </Col> 
    </Row>
    </div>
  )
}

export default Notifications