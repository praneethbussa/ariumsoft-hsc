import React from 'react';
import { Row,Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import "../assets/Candidates.css";
import GreenTick from "../Images/greentick.svg";
import RedCross from "../Images/redcross.svg";
import CandidateInfo from './CandidateInfo';
import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';

const Candidates = () => {
  return (
        <div className='col-md-10 candidate-screen'>
            <Routes>
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/candidates/addCandidate" element={<CandidateInfo />} />
       
      </Routes>
        <Row>
                <Col md={10}>
            <p className='candidate-text'>Candidates</p>
            </Col>
            <Col md={2}>
            <span>
            <Link style={{textDecoration: 'none'}} to="/candidates/addCandidate" ><button type='button' className='add-button'>Add candidate</button></Link>
            </span>
            </Col>
            </Row>
            <Col md={6}>
            <div class="search-bar">
    <i class="fa fa-search"></i>
    <input type="text" className='form-control' placeholder="Search"></input>
    </div>
    </Col>
    <Row>
      <Col md={2}>
        <div className='select-candidate'>
        <FloatingLabel
          id="floatingSelectGrid"
          label="Candidate Type">
          <Form.Select>
            <option value="all">All</option>
            <option value="my-candidates">My Candidates</option>
          </Form.Select>
        </FloatingLabel>
        </div>
      </Col>
      <Col md={2}>
      <div className='select-candidate'>
        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Availability">
          <Form.Select>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="in-active">InActive</option>
          </Form.Select>
        </FloatingLabel>
        </div>
      </Col>
    </Row>

   <div className='candidate-block1'>
          <Row>
         <Col md={4}>
      <div className="Candidate">
    <Row>
      <Col md={3}>
          <span className="icon1"><i className="fa-solid fa-circle-user" id="candidate-icon"></i>
          <img src={GreenTick} className="tick-img" alt="..." /></span></Col>
          <Col md={9}>
          <div className="candid-status">Interview Scheduled</div>
      <div className="candidateId1">C001 - Melvin Jacob</div>
              <div className="candidate-role">Interaction Designer</div>
              </Col>
        <Col>
        <div className='candid-experience'>5.2 years Experience</div>
        </Col>
        <Row>
        <Col>
            <span className='recruit'>Williams</span>
            <span className='exclusive'>Exclusive</span>
            <span className='until-date'>Until 5/09/2022</span>
            </Col>
            </Row>
    </Row>
    </div>
    </Col>

    <Col md={4}>
      <div className="Candidate">
    <Row>
      <Col md={3}>
          <span className="icon1"><i className="fa-solid fa-circle-user" id="candidate-icon"></i>
          <img src={GreenTick} className="tick-img" alt="..." /></span></Col>
          <Col md={9}>
          <div className="candid-status">Interview Scheduled</div>
      <div className="candidateId1">C002 - Adarsh Singh</div>
              <div className="candidate-role">Scrum master</div>
              </Col>
        <Col>
        <div className='candid-experience'>5.2 years Experience</div>
        </Col>
        <Row>
        <Col>
            <span className='recruit'>Williams</span>
            <span className='exclusive'>Exclusive</span>
            <span className='until-date'>Until 22/09/2022</span>
            </Col>
            </Row>
    </Row>
    </div>
    </Col>

    <Col md={4}>
      <div className="Candidate">
    <Row>
      <Col md={3}>
          <span className="icon1"><i className="fa-solid fa-circle-user" id="candidate-icon"></i>
          <img src={GreenTick} className="tick-img" alt="..." /></span></Col>
          <Col md={9}>
          <div className="candid-status">Interview Scheduled</div>
      <div className="candidateId1">C001 - Robert Stuart</div>
              <div className="candidate-role">Scrum master</div>
              </Col>
        <Col>
        <div className='candid-experience'>5.2 years Experience</div>
        </Col>
        <Row>
        <Col>
            <span className='recruit'>Williams</span>
            <span className='exclusive'>Exclusive</span>
            <span className='until-date'>Until 22/09/2022</span>
            </Col>
            </Row>
    </Row>
    </div>
    </Col>
    </Row>
    <div className='candidate-block2'>
    <Row>
    <Col md={4}>
      <div className="Candidate">
    <Row>
      <Col md={3}>
          <span className="icon1"><i className="fa-solid fa-circle-user" id="candidate-icon"></i>
          <img src={GreenTick} className="tick-img" alt="..." /></span></Col>
          <Col md={9}>
          <div className="candid-status">Interview Scheduled</div>
      <div className="candidateId1">C001 - Robert Stuart</div>
              <div className="candidate-role">Scrum master</div>
              </Col>
        <Col>
        <div className='candid-experience'>5.2 years Experience</div>
        </Col>
        <Row>
        <Col>
            <span className='recruit'>Williams</span>
            <span className='exclusive'>Exclusive</span>
            <span className='until-date'>Until 22/09/2022</span>
            </Col>
            </Row>
    </Row>
    </div>
    </Col>
        
    <Col md={4}>
      <div className="Candidate">
    <Row>
      <Col md={3}>
          <span className="icon1"><i className="fa-solid fa-circle-user" id="candidate-icon"></i>
          <img src={RedCross} className="tick-img" alt="..." /></span></Col>
          <Col md={9}>
          <div className="candid-status">Interview Scheduled</div>
      <div className="candidateId1">C001 - Robert Stuart</div>
              <div className="candidate-role">Scrum master</div>
              </Col>
        <Col>
        <div className='candid-experience'>5.2 years Experience</div>
        </Col>
        <Row>
        <Col>
            <span className='recruit'>Williams</span>
            <span className='exclusive'>Exclusive</span>
            <span className='until-date'>Until 22/09/2022</span>
            </Col>
            </Row>
    </Row>
    </div>
    </Col>
    <Col md={4}>
      <div className="Candidate">
    <Row>
      <Col md={3}>
          <span className="icon1"><i className="fa-solid fa-circle-user" id="candidate-icon"></i>
          <img src={GreenTick} className="tick-img" alt="..." /></span></Col>
          <Col md={9}>
          <div className="candid-status">Interview Scheduled</div>
      <div className="candidateId1">C001 - Robert Stuart</div>
              <div className="candidate-role">Scrum master</div>
              </Col>
        <Col>
        <div className='candid-experience'>5.2 years Experience</div>
        </Col>
        <Row>
        <Col>
            <span className='recruit'>Williams</span>
            <span className='exclusive'>Exclusive</span>
            <span className='until-date'>Until 22/09/2022</span>
            </Col>
            </Row>
    </Row>
    </div>
    </Col>
    </Row>
    </div>
    </div>
    </div>
    
  )
}

export default Candidates