import React, { useEffect } from 'react';
import { Row,Col } from 'react-bootstrap';
import "../assets/CandidateStatus.css";

const CandidateStatus = () => {
  
  return (
      <div className='col-md-10 status-screen'>
    <div className='status-text'>Status</div>

    <div class="container py-5">
    <Row>
        <Col md={12} lg={12}>
          <div class="tracking-status">
            <div class="tracking-icon status-current blinker">
              <svg class="svg-inline--fa fa-circle fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
              </svg>
            </div>
            <div class="status-content1">JO002 - Interaction Designer - Hired<span class='status-content2'>Candidate got hired for the interaction designer position with tesla</span><span class="status-postedtime">02:00pm</span><span class="status-posteddate">09 Aug 2022</span></div>
          </div>
          <div class="tracking-status">
            <div class="tracking-icon status-current blinker">
              <svg class="svg-inline--fa fa-circle fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
              </svg>
            </div>
            <div class="status-content1">JO002 - Interaction Designer - Interview Scheduled<span class="status-content2">Candidate interview Scheduled</span><span class="status-postedtime">02:00pm</span><span class="status-posteddate">09 Aug 2022</span></div>
          </div>
          <div class="tracking-status">
            <div class="tracking-icon status-current blinker">
              <svg class="svg-inline--fa fa-circle fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
              </svg>
            </div>
            <div class="status-content1">JO002 - Interaction Designer - Client Submitted<span class="status-content2">Candidate profile is submitted to client company</span><span class="status-postedtime">02:00pm</span><span class="status-posteddate">09 Aug 2022</span></div>
          </div>
          <div class="tracking-status">
            <div class="tracking-icon status-current blinker">
              <svg class="svg-inline--fa fa-circle fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
              </svg>
            </div>
            <div class="status-content1">JO002 - Interaction Designer - In Process<span class="status-content2">Candidates profile is in process for interaction designer position with tesla</span><span class="status-postedtime">02:00pm</span><span class="status-posteddate">09 Aug 2022</span></div>
          </div>
          <div class="tracking-status">
            <div class="tracking-icon status-current blinker">
              <svg class="svg-inline--fa fa-circle fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
              </svg>
            </div>
            <div class="status-content1">JO002 - Interaction Designer - Available<span class="status-content2">Candidate is available</span><span class="status-postedtime">02:00pm</span><span class="status-posteddate">09 Aug 2022</span></div>
          </div>
        </Col>
        </Row>
    </div>
  </div>


  )
}

export default CandidateStatus