import React from 'react';
import { Row,Col } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import plusCircle from '../Images/plus-circle.svg';
import "../assets/CandidateInfo.css";
import { Link } from 'react-router-dom';

const CandidateInfo = () => { 
  return (
    <div className='candidateInfo-page'>
        <p className='candid-text'>Candidate Information</p>
        <div className='contact-details'>Contact Details</div>
        <div className='contact-border'>
    {/* <Row>
            <Col md={8}>
    <Row>
        <Col md={4}>
            <FloatingLabel label="Name" className="full-name">
            <Form.Control type="name" placeholder='enter full name'/>
      </FloatingLabel>
        </Col>
        <Col md={4}>
            <FloatingLabel label="Candidate ID" className="candid-id">
            <Form.Control type="text" placeholder='Enter candidateId'/>
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
            <Form.Control type="number" placeholder='enter mobile num'/>
            </FloatingLabel>
        </Col>
        <Col md={4}>
            <FloatingLabel label="Address Line 1" className="candid-address1">
            <Form.Control type="text" placeholder='enter address'/>
            </FloatingLabel>
        </Col>
        <Col md={3}>
            <FloatingLabel label="Address Line 2" className="candid-address2">
            <Form.Control type="text" placeholder='enter address'/>
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
            <Form.Control type="number"/>
            </FloatingLabel>
        </Col>
        <Col md={4}>
            <FloatingLabel label="State" className="candid-address1">
            <Form.Control type="text"/>
            </FloatingLabel>
        </Col>
        <Col md={3}>
            <FloatingLabel label="Country" className="candid-address2">
            <Form.Control type="text"/>
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
            <Form.Control type="number"/>
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
            <Form.Control type="text"/>
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
            <Form.Control type="date"/>
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

    <Row>
        <Col md={6}>
       <button className='resume'>
        <span className='resume-upload'>Upload Resume</span><img src={plusCircle} id="plus-icon"></img>
        </button>
        </Col>
    </Row>
    <Row>
        <Col md={6}>
    <div className='format-file'>
    <div className='checking-box'><input type='checkbox' id='check-box' /></div>
    <div className='checking-label'><label>HSC Formatted</label></div>
    </div>
        </Col>
        </Row> */}
     {/* <Row>
        <Col md={6}>
            <button type='button' className='cancel-btn'>Cancel</button>
          </Col>
        <Col md={6}>
            <span>
                <Link to="candidates/addCandidate/changestatus"><button type='button' className='saving-button'>Save</button></Link>
            </span>
        </Col>
    </Row> */}


     <div className='mb-1'>
                <div className='d-flex flex-row my-2'>
                    <form className="col-md-3 form-floating">
                        <input type="text" className="form-control" id="floatingInputValue" placeholder="Melvin Jacob" value="Melvin Jacob"/>
                        <label for="floatingInputValue">Name</label>
                    </form>
                    <form className="form-floating col-md-3 mx-3">
                        <input type="text" className="form-control" id="floatingInputValue" placeholder="C001" value="C001"/>
                        <label for="floatingInputValue">Candidate ID</label>
                    </form>
                    <form className="col-md-2 form-floating">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>All</option>
                            <option value="1">Active</option>
                            <option value="2">In Active</option>
                        </select>
                        <label for="floatingInputValue">Availability</label>
                    </form>
                </div>

                <div className='d-flex flex-row my-2'>
                <form className="col-md-3 form-floating">
                        <input type="text" className="form-control" id="floatingInputValue" placeholder='Mobile'/>
                         <label for="floatingInputValue">Mobile</label>
                    </form>
                    <form className="col-md-3 mx-3 form-floating">
                        <input type="text" className="form-control" id="floatingInputValue" placeholder="Address Line 1" />
                        <label for="floatingInputValue">Address Line 1</label>
                    </form>
                    <form className="col-md-2 form-floating">
                        <input type="text" className="form-control" id="floatingInputValue" placeholder="Address Line 2" />
                        <label for="floatingInputValue">Address Line 2</label>
                    </form>
                </div>

                <div className='d-flex flex-row my-2'>
                    <form className="col-md-3 form-floating">
                        <input type="text" className="form-control" id="floatingInputValue" placeholder="City"/>
                         <label for="floatingInputValue">City</label>
                    </form>
                    <form className="col-md-3 mx-3 form-floating">
                        <input type="text" className="form-control" id="floatingInputValue" placeholder="State" />
                        <label for="floatingInputValue">State</label>
                    </form>
                    <form className="col-md-2 form-floating">
                        <input type="text" className="form-control" id="floatingInputValue" placeholder="Country" />
                        <label for="floatingInputValue">Country</label>
                    </form>
                </div>

                <div className='d-flex flex-row my-2'>
                    <form className="col-md-3 form-floating">
                        <input type="text" className="form-control" id="floatingInputValue" placeholder="ZipCode"/>
                         <label for="floatingInputValue">ZipCode</label>
                    </form>
                </div>

                <div className='job-prefer'>Job Type preferred</div>

                <div className='d-flex flex-row my-2'>
                    <form className="col-md-3 form-floating">
                        <input type="text" className="form-control" id="floatingInputValue" placeholder="Interaction Designer" value="Interaction Designer"/>
                         <label for="floatingInputValue">Role</label>
                    </form>
                    <form className="col-md-3 mx-3 form-floating">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Full Time</option>
                            <option value="1">Part Time</option>
                        </select>
                        <label for="floatingInputValue">Job Type</label>
                    </form>
                    <form className="col-md-3 form-floating">
                        <input type="date" className="form-control" id="floatingInputValue"/>
                         <label for="floatingInputValue">Start date for Exclusivity</label>
                    </form>
                </div>

                <div className='education-details'>Education & Experience</div>

                <div className='d-flex flex-row my-2'>
                <form className="col-md-3 form-floating">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Post Graduate</option>
                            <option value="1">Graduate</option>
                        </select>
                        <label for="floatingInputValue">Qualification</label>
                </form>
                <form className="col-md-3 mx-3 form-floating">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>5-7 years</option>
                            <option value="1">3-4 years</option>
                        </select>
                        <label for="floatingInputValue">Experience</label>
                </form>
                </div>

                <div className='my-2'>
                <div className='notes'>Notes</div>
                <div className='d-flex flex-row'>
                    <div className='col-md-4 type-area'>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Type here...'></textarea>
                    </div>                                    
                </div>
            </div>

            <div className='format-file'>
            <div className='checking-box'><input type='checkbox' id='check-box' /></div>
            <div className='checking-label'><label>HSC Formatted</label></div>
            </div>

                </div>

            <div className='my-4'>
                <div className='d-flex flex-row justify-content-between'>
                    <div className='col-md-3'>
                        <Link to={"/candidates"}><button type='button' className='cancel-btn'>Cancel</button></Link>
                    </div>
                    <div className='col-md-3'>
                        <Link to={"/candidates"}><button type='button' className='saving-button'>Save</button></Link>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default CandidateInfo