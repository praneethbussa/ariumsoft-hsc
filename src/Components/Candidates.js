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
        <div className='candidate-screen'>
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
          <div className="Candidate2">
          <div className="candid-status">In Process</div>
             <Col md={2}><i className="fa-solid fa-circle-user" id="candidate-icon"></i>
             <img src={GreenTick} className="tick-img" alt="..." /></Col>
             <Col><div className="candidateId3">C003 - James Addison</div></Col>
            <div className="candidate-role">Scrum master</div>
            <div className='candid-experience'>5.2 years Experience</div>
            <Row>
            <Col>
            <span className='recruit'>Williams</span>
            <span className='exclusive'>Exclusive</span>
            <span className='until-date'>Until 22/09/2022</span>
            </Col>
            </Row>
            </div>
          </Col>
          <Col md={4}>
          <div className="Candidate2">
          <div className="candid-status">In Process</div>
             <Col md={2}><i className="fa-solid fa-circle-user" id="candidate-icon"></i>
             <img src={GreenTick} className="tick-img" alt="..." /></Col>
             <Col><div className="candidateId3">C003 - James Addison</div></Col>
            <div className="candidate-role">Scrum master</div>
            <div className='candid-experience'>5.2 years Experience</div>
            <Row>
            <Col>
            <span className='recruit'>Williams</span>
            <span className='exclusive'>Exclusive</span>
            <span className='until-date'>Until 22/09/2022</span>
            </Col>
            </Row>
            </div>
          </Col>
          <Col md={4}>
          <div className="Candidate3">
          <div className="candid-status">In Process</div>
             <Col md={2}><i className="fa-solid fa-circle-user" id="candidate-icon"></i>
             <img src={GreenTick} className="tick-img" alt="..." /></Col>
             <Col><div className="candidateId3">C003 - James Addison</div></Col>
            <div className="candidate-role">Scrum master</div>
            <div className='candid-experience'>5.2 years Experience</div>
            <Row>
            <Col>
            <span className='recruit'>Williams</span>
            <span className='exclusive'>Exclusive</span>
            <span className='until-date'>Until 22/09/2022</span>
            </Col>
            </Row>
            </div>
          </Col>  
    </Row>
    </div>
    <div className='candidate-block2'>
    <Row>
        <Col md={4}>
          <div className="Candidate2">
          <div className="candid-status">In Process</div>
             <Col md={2}><i className="fa-solid fa-circle-user" id="candidate-icon"></i>
             <img src={GreenTick} className="tick-img" alt="..." /></Col>
             <Col><div className="candidateId3">C003 - James Addison</div></Col>
            <div className="candidate-role">Scrum master</div>
            <div className='candid-experience'>5.2 years Experience</div>
            <Row>
            <Col>
            <span className='recruit'>Williams</span>
            <span className='exclusive'>Exclusive</span>
            <span className='until-date'>Until 22/09/2022</span>
            </Col>
            </Row>
            </div>
          </Col>
          <Col md={4}>
          <div className="Candidate2">
          <div className="candid-status">In Process</div>
             <Col md={2}><i className="fa-solid fa-circle-user" id="candidate-icon"></i>
             <img src={RedCross} className="tick-img" alt="..." /></Col>
             <Col><div className="candidateId3">C003 - James Addison</div></Col>
            <div className="candidate-role">Scrum master</div>
            <div className='candid-experience'>5.2 years Experience</div>
            <Row>
            <Col>
            <span className='recruit'>Williams</span>
            <span className='exclusive'>Exclusive</span>
            <span className='until-date'>Until 22/09/2022</span>
            </Col>
            </Row>
            </div>
          </Col>
          <Col md={4}>
          <div className="Candidate3">
          <div className="candid-status">In Process</div>
             <Col md={2}><i className="fa-solid fa-circle-user" id="candidate-icon"></i>
             <img src={GreenTick} className="tick-img" alt="..." /></Col>
             <Col><div className="candidateId3">C003 - James Addison</div></Col>
            <div className="candidate-role">Scrum master</div>
            <div className='candid-experience'>5.2 years Experience</div>
            <Row>
            <Col>
            <span className='recruit'>Williams</span>
            <span className='exclusive'>Exclusive</span>
            <span className='until-date'>Until 22/09/2022</span>
            </Col>
            </Row>
            </div>
          </Col>  
    </Row>
    </div>
    </div>
    
  )
}

export default Candidates