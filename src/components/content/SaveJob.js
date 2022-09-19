import React from 'react'

import './SaveJob.css'
import Person from '../../images/Person.svg';
import Tick from '../../images/Tick.svg';
import Edit from '../../images/Edit.svg';
import Line from '../../images/Line.svg';
import File from '../../images/File.svg';
import { Link } from 'react-router-dom';

export default function SaveJob() {
  return (
    <div className='col-sm-10 mx-4'>
        <div id='content' className='bg-white px-4'>
                <div className='d-flex flex-row position-relative'>
                    <div className='d-flex flex-row'>
                        <div className='position-relative'>
                            <img className='mt-4 person' src={Person} alt={'User'}/>
                            <img className='mb-2 mx-1 position-absolute bottom-0 start-50 translate-end' src={Tick} alt={'Tick'}/>
                        </div>
                        <div id='title' className='mx-2'>Melvin Jacob</div> 
                        <img className='edit' src={Edit} alt={'User'}/> 
                    </div>
                    <div className='w-25 position-absolute top-0 end-0 d-flex flex-row'>
                        <Link to={'/changestatus'} id='cancel' className='bg-white w-100 mx-2 btn btn-primary px-4 py-3'>Cancel</Link>  
                        <Link to={'/'} id='button' className='w-100 btn btn-primary px-4 py-3'>Save</Link>
                    </div>
                </div>
                <div id='role'>Interaction Designer</div>
                <div className='my-2 status'>Available</div>

                <div className='d-flex flex-row my-5'>
                    <div className='col-3'>
                        <form className="form-floating">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>JO002 - Interaction Designer</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <label for="floatingInputValue">Job Opening</label>
                        </form>
                    </div>
                    <div className='col-3 mx-2'>
                        <form className="form-floating">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Client Submitted</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <label for="floatingInputValue">Status</label>
                        </form>
                    </div>
                    <div className='col-3'>
                        <form class="form-floating">
                            <input type="text" class="form-control" id="floatingInputValue" placeholder="Comments" />
                            <label for="floatingInputValue">Comments</label> 
                        </form>
                    </div>
                </div>

                <div className='my-1 head d-flex flex-row'>
                    <div className='active col-1'>Profile</div>
                    <div className='col-1'>Status</div>
                    <div className='col-1'>Notes</div>
                </div>
                <img className='lines' src={Line} alt={'Line'}/> 
                <div className='heading'>Contact Details</div>    
                <div className='contact col-3 p-2'>mjacob@gmail.com</div>
                <div className='contact col-3 p-2 my-2'>+11234-567-890</div>
                <div className='heading'>Education & Experience</div>
                <div>Post Graduate</div>
                <div>5.2 years</div>
                <div className='heading'>Skills</div>
                <div className='my-2 d-flex flex-row'>
                    <div className='skills mx-1 rounded-pill px-2 d-flex align-items-center'>Adobe Suite</div>
                    <div className='skills mx-1 rounded-pill px-2 d-flex align-items-center'>Interaction</div>
                    <div className='skills mx-1 rounded-pill px-2 d-flex align-items-center'>Information Architecture</div>
                    <div className='skills mx-1 rounded-pill px-2 d-flex align-items-center'>Layout Design</div>
                    <div className='skills mx-1 rounded-pill px-2 d-flex align-items-center'>Design Strategy</div>
                </div>
                <div className='heading'>Job Type Prefered</div>
                <div>Permanent Role</div>
                <div className='heading'>Address</div>
                <div>Paradise Apartments</div>
                <div>Road Number 1</div>
                <div>Street 23</div>
                <div>New Jersey</div>
                <div>USA - 12345</div>  
                <div className='heading'>Recruiter</div>
                <div>Williams</div>
                <div className='heading'>Attachments</div>
                <div className='col-4 p-3 card d-flex flex-row position-relative'>
                    <img className='file' src={File} alt={'File'}/> 
                    <div>mjacob_resume.pdf</div>
                    <div className='format'>HSC Formated</div>
                </div>
                <div className='col-4 p-3 my-2 card d-flex flex-row'>
                    <img className='file' src={File} alt={'File'}/> 
                    design_portfolio.pdf
                </div>
        </div>
    </div>
  )
}
