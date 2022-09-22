import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Search from '../../Images/Search.svg';
import User from '../../Images/User.svg';
import Delete from '../../Images/Delete.svg';

import DeleteTask from './DeleteTask';
import './MyTasks.css';

export default function MyTasks() {
    
    const [modalShow, setModalShow] = useState(false);
    
    return (
        <div className='col-md-10'>
            <div className='bg-white pb-5 pt-4 px-4 content'>
                <div className='d-flex flex-row'>
                    <h5 className='headings'>MyTasks</h5>
                    <div className='line'></div>    
                </div>
                <div id='search' className="mx-2 px-3 d-flex flex-row position-relative">
                    <img className='h-50 position-relative my-3 mx-0 top-0 start-0' src={Search} alt={'Search'} />
                    <input type="text" className="border-0 form-control search" placeholder="search"/>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <div style={{height:"96.5%"}} className="p-4 jobs mt-4">
                                <div id="job1" className='inner p-3 mb-2'>
                                    <div className='jobtitle'>JO001-Harley Davidson-Job Requirement</div>
                                    <div className='d-flex flex-row'>
                                        <div className='col px-0 client'><img src={User} alt={'User'}/>Ray</div>
                                        <div className='datetime mx-2 col-md-auto'>10-08-2022</div>
                                        <div className='datetime col-md-2'>02:05pm</div>
                                    </div>
                                </div>
                                <div className='inner p-3 mb-2'>
                                    <div className='jobtitle'>JO002-Job Requirement for Tesla</div>
                                    <div className='d-flex flex-row'>
                                        <div className='col px-0 client'><img src={User} alt={'User'}/>Emily</div>
                                        <div className='datetime mx-2 col-md-auto'>10-08-2022</div>
                                        <div className='datetime col-md-2'>11:25pm</div>
                                    </div>
                                </div>
                                <div className='inner p-3 mb-2'>
                                    <div className='jobtitle'>JO003-Johnson N Johnson-Need 12 candidates</div>
                                    <div className='d-flex flex-row'>
                                        <div className='col px-0 client'><img src={User} alt={'User'}/>Emily</div>
                                        <div className='datetime mx-2 col-md-auto'>10-08-2022</div>
                                        <div className='datetime col-md-2'>10:25pm</div>
                                    </div>
                                </div>
                                <div className='inner p-3 mb-2'>
                                    <div className='jobtitle'>JO004-Facebook-Job Requirement</div>
                                    <div className='d-flex flex-row'>
                                        <div className='col px-0 client'><img src={User} alt={'User'}/>Peter Heins</div>
                                        <div className='datetime mx-2 col-md-auto'>10-08-2022</div>
                                        <div className='datetime col-md-2'>09:25pm</div>
                                    </div>
                                </div>
                                <div className='inner p-3'>
                                    <div className='jobtitle'>JO005-Oclo Designs-Job Requirement</div>
                                    <div className='d-flex flex-row'>
                                        <div className='col px-0 client'><img src={User} alt={'User'}/>Emily</div>
                                        <div className='datetime mx-2 col-md-auto'>10-08-2022</div>
                                        <div className='datetime col-md-2'>08:15pm</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5 mt-4'>
                            <div className='h-100 jobs mb-5 px-4 pt-2 py-5'>
                                <div className='d-flex flex-row justify-content-between'>
                                    <div className='col-md-11 my-2 headings'>Harley Davidson-Job Requirement</div>
                                    <Button className='col-md-1' variant='link' onClick={() => setModalShow(true)}>
                                        <img src={Delete} alt={'Delete'}/>
                                    </Button>
                                    <DeleteTask show={modalShow} onHide={() => setModalShow(false)}/>
                                </div>
                                <div className='details'>Hi we are looking for the following positions. Thanks.</div>
                                <div className='jobtitle'>User Experience Designers - Senior Level</div>
                                <div className='mt-4 px-3 jobdetails'>
                                    <div className='my-2 subheadings'>URL</div>
                                    <a className='url my-1' href='www.indeed.com/recruitments/job.com'>www.indeed.com/recruitments/job.com</a>
                                    <div className='my-2 subheadings'>Due Date</div>
                                    <div className='my-1 details'>10th September 2022</div>
                                    <div className='my-2 subheadings'>Manager</div>
                                    <div className='my-1 details'>Peter Heins</div>
                                    <div className='my-1 details'>peterheins.am@hsc.com</div>
                                    <div className='my-2 subheadings'>Positions to be filled</div>
                                    <div className=' details'>12</div>
                                </div>
                                <Link to={"/createjobopening"} className="mt-4 btn btn-primary col-lg-5 d-flex align-items-center justify-content-center" id="save">Create Job Opening</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
