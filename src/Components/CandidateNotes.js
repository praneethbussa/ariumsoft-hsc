import React from 'react';
import "../assets/CandidateNotes.css";
import { Row,Col } from 'react-bootstrap';

const CandidateNotes = () => {
  return (
    <div className='candidNotes-screen'>
        <Row>
            <Col md={6}>
        <p className='note-point1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
         mollit anim id est laborum."</p>
         <span className='note-postedtime'>2:53pm</span>
         <span className='note-posteddate'>10-08-2022</span>
         <span className='noteby-candidate'>Steve Jacobs</span>
         </Col>
         </Row>
         <Row>
         <Col md={6}>
         <p className='note-point2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
         occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
         <span className='note-postedtime'>2:53pm</span>
         <span className='note-posteddate'>10-08-2022</span>
         <span className='noteby-candidate'>Steve Jacobs</span>
         </Col>
         </Row>
        <Row>
        <Col md={6}>
            <div className='text-notes'>
            <textarea>Type here..</textarea>
            </div>
            <span className='hit-enter'><i class="fa-sharp fa-solid fa-circle-check" id="tick-mark"></i>
            <i class="fa-solid fa-circle-xmark" id="cross-mark"></i>
            </span>
            </Col> 
    </Row>
    </div>
  )
}

export default CandidateNotes