import React from 'react'
import { Link } from 'react-router-dom';

import Search from "../Images/Search.svg";
import User from "../Images/User.svg";

import "../assets/MyTasks.css";

export default function MyTasks() {
  return (
    <div className='mytasks'>
        <div className='card'>
            <div className='card-body'>
                <div className='d-flex flex-row'>
                    <h5 className='title'>MyTasks</h5>
                    <div className='line'></div>    
                </div>
                <div id='search' className="mx-2 input-group flex-nowrap">
                    <span className="input-group-text bg-white" id="addon-wrapping"><img src={Search} alt={'Search'} /></span>
                    <input type="text" className="form-control" placeholder="search" aria-label="search" aria-describedby="search" />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-5'>
                            <div className="card card-body jobs">
                                <div id="job1" className='card card-body inner'>
                                    <h6 className='jobtitle'>JO001-Harley Davidson-Job Requirement</h6>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col client'><img src={User} alt={'User'}/>Ray</div>
                                            <div className='datetime col-md-auto'>10-08-2022</div>
                                            <div className='datetime col col-lg-2'>02:05pm</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card card-body inner'>
                                    <h6 className='jobtitle'>JO002-Job Requirement for Tesla</h6>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col client'><img src={User} alt={'User'}/>Emily</div>
                                            <div className='datetime col-md-auto'>10-08-2022</div>
                                            <div className='datetime col col-lg-2'>11:25pm</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card card-body inner'>
                                    <h6 className='jobtitle'>JO003-Johnson N Johnson-Need 12 candidates</h6>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col client'><img src={User} alt={'User'}/>Emily</div>
                                            <div className='datetime col-md-auto'>10-08-2022</div>
                                            <div className='datetime col col-lg-2'>10:25pm</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card card-body inner'>
                                    <h6 className='jobtitle'>JO004-Facebook-Job Requirement</h6>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col client'><img src={User} alt={'User'}/>Peter Heins</div>
                                            <div className='datetime col-md-auto'>10-08-2022</div>
                                            <div className='datetime col col-lg-2'>09:25pm</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card card-body inner'>
                                    <h6 className='jobtitle'>JO005-Oclo Designs-Job Requirement</h6>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col client'><img src={User} alt={'User'}/>Emily</div>
                                            <div className='datetime col-md-auto'>10-08-2022</div>
                                            <div className='datetime col col-lg-2'> 08:15pm</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-5'>
                            <div className='card card-body jobs'>
                                <h5 className='detailscard'>Harley Davidson-Job Requirement</h5>
                                <h6>Hi we are looking for the following positions. Thanks.</h6>
                                <h6 id="title">User Experience Designers - Senior Level</h6>
                                <div className='card card-body jobdetails'>
                                    <h5>URL</h5>
                                    <h6 className='url'>www.indeed.com/recruitments/job.com</h6>
                                    <h5>Last Date for applying</h5>
                                    <h6>10th September 2022</h6>
                                    <h5>Your Manager</h5>
                                    <h6>Peter Heins</h6>
                                    <h6>peterheins.am@hsc.com</h6>
                                    <h5>Positions to be filled</h5>
                                    <h6>12</h6>
                                </div>
                                <Link to={"/createjobopening"} className="btn btn-primary col-5 d-flex align-items-center justify-content-center" id="save">Create Job Opening</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
