import React, {useState} from 'react';
import { Row,Col } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import plusCircle from '../Images/plus-circle.svg';
import "../assets/CandidateInfo.css";

const CandidateInfo = () => { 
  return (
    <div className='candidateInfo-page'>
        <p className='candid-text'>Candidate Information</p>
        <div className='contact-details'>Contact Details</div>
        <div className='contact-border'>
    <Row>
            <Col md={8}>
    <Row>
        <Col md={4}>
            <FloatingLabel label="Name" className="full-name">
            <Form.Control type="name" placeholder="Enter full name" />
      </FloatingLabel>
        </Col>
        <Col md={4}>
            <FloatingLabel label="Candidate ID" className="candid-id">
            <Form.Control type="text" placeholder="Enter ID" />
        </FloatingLabel>
        </Col>
        <Col md={3}>
            <div className='select-status'>
        <FloatingLabel controlId="floatingSelectGrid" label="Availability">
           <Form.Select>
               <option value="all">All</option>
               <option value="active">Active</option>
               <option value="in-active">InActive</option>
           </Form.Select>
           </FloatingLabel>
               </div>
        </Col>
    </Row>
        </Col>
    </Row>
    <Row>
        <Col md={8}>
                    <div className='row-2'>
    <Row>
        <Col md={4}>
            <FloatingLabel label="Mobile" className="candid-mobile">
            <Form.Control type="number" placeholder="Enter mobile num" />
            </FloatingLabel>
        </Col>
        <Col md={4}>
            <FloatingLabel label="Address Line 1" className="candid-address1">
            <Form.Control type="text" placeholder="Enter address" />
            </FloatingLabel>
        </Col>
        <Col md={3}>
            <FloatingLabel label="Address Line 2" className="candid-address2">
            <Form.Control type="text" placeholder="Enter address" />
            </FloatingLabel>
        </Col>
    </Row>
            </div>
        </Col>
    </Row>

    <Row>
        <Col md={8}>
                    <div className='row-2'>
    <Row>
        <Col md={4}>
            <FloatingLabel label="City" className="candid-mobile">
            <Form.Control type="number" placeholder="Enter mobile num" />
            </FloatingLabel>
        </Col>
        <Col md={4}>
            <FloatingLabel label="State" className="candid-address1">
            <Form.Control type="text" placeholder="Enter address" />
            </FloatingLabel>
        </Col>
        <Col md={3}>
            <FloatingLabel label="Country" className="candid-address2">
            <Form.Control type="text" placeholder="Enter address" />
            </FloatingLabel>
        </Col>
    </Row>
            </div>
        </Col>
    </Row>

    <Row>
        <Col md={8}>
            <div className='row-2'>
    <Row>
        <Col md={4}>
            <FloatingLabel label="Zipcode" className="candid-mobile">
            <Form.Control type="number" placeholder="Enter mobile num" />
            </FloatingLabel>
        </Col>
    </Row>
            </div>
        </Col>
    </Row>
    </div>

        <div className='job-prefer'>Job Type preferred</div>
        <Row>
        <Col md={8}>
                    <div className='row-1'>
    <Row>
        <Col md={4}>
            <FloatingLabel label="Role" className="candid-mobile">
            <Form.Control type="text" placeholder="Enter mobile num" />
            </FloatingLabel>
        </Col>
        <Col md={4}>
            <FloatingLabel controlId="floatingSelectGrid" label="Job Type">
            <Form.Select>
               <option value="full-time">Full Time</option>
               <option value="part-time">Part Time</option>
            </Form.Select>
            </FloatingLabel>
        </Col>
        <Col md={4}>
            <FloatingLabel label="Start date for Exclusivity" className="candid-mobile">
            <Form.Control type="date" placeholder="Enter mobile num" />
            </FloatingLabel>
        </Col>
    </Row>
             </div>
        </Col>
    </Row>

    <div className='education-details'>Education & Experience</div>
    <Row>
        <Col md={8}>
        <div className='row-1'>
    <Row>
        <Col md={4}>
            <FloatingLabel controlId="floatingSelectGrid" label="Qualification">
            <Form.Select>
               <option value="full-time">Graduate</option>
               <option value="part-time">Post Graduate</option>
            </Form.Select>
            </FloatingLabel>
        </Col>
        <Col md={4}>
            <FloatingLabel controlId="floatingSelectGrid" label="Experience">
            <Form.Select>
               <option value="full-time">2-3 years</option>
               <option value="part-time">4-5 years</option>
            </Form.Select>
            </FloatingLabel>
        </Col>
    </Row>
          </div>
        </Col>
    </Row>


        <div className='notes'>Notes</div>
    <Row>
        <Col md={6}>
            <div className='type-area'>
            <textarea>Type here..</textarea>
            </div>
            </Col> 
    </Row>


        <Col md={6}>
       <button className='resume'>
        <span className='resume-upload'>Upload Resume</span><img src={plusCircle} id="plus-icon"></img>
        </button>
        </Col>
        <Col>
    <div className='format'>
    <div className='checking-box'><input type='checkbox' id='check-box' /></div>
    <div className='checking-label'><label>HSC Formatted</label></div>
    </div>
        </Col>
    <Row>
        <Col md={6}>
            <button type='button' className='cancel-btn'>Cancel</button>
        </Col>
        <Col md={6}>
            <span>
                <button type='button' className='saving-button'>Save</button>
            </span>
        </Col>
    </Row>
    </div>
  )
}

export default CandidateInfo