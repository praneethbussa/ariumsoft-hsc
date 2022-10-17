import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import Search from '../../Images/Search.svg';
import User from '../../Images/User.svg';
import Edit from '../../Images/Edit.svg';
import Delete from '../../Images/Delete.svg';
import Arrowright from '../../Images/Arrowright.svg';
import Dropdownicon from '../../Images/Dropdownicon.svg';
import Userlarge from '../../Images/Userlarge.svg';
import toast from 'react-hot-toast';
import DeleteTask from './DeleteTask';
import { Button } from 'react-bootstrap';
import './JobOpening.css'
import { deleteJobOpening, getAllJobOpenings } from '../helpers/api/jobs';
import { useForm } from 'react-hook-form';

export default function JobOpening() {

    const [modalShow, setModalShow] = useState(false);
    const [allJobs, setAllJobs] = useState([]);
    const { id } = useParams();
    const [activeJob, setActiveJob] = useState([]);
    const [activeJobId, setActiveJobId] = useState(id ? id : "");
    const [searchJobs, setSearchJobs] = useState([]);
    const [searchParams, setSearchParams] = useState({JobTitle:''});

    useEffect(() => {
        (async () => {
          const res= await getAllJobOpenings();
      setAllJobs(res?.data?.Jobopenings)
      setSearchJobs(res?.data?.Jobopenings)
        })();
      }, []);

      const setFilterParams = (field, value) => {
        if(field == "JobTitle"){
          searchParams.JobTitle = value;
        }else{
          searchParams[field] = value;
        }
        setSearchParams(searchParams);
        filterJobOpenings();
      }
      const filterJobOpenings = () => { 
        const results = allJobs?.filter(function(item) {
          if(searchParams.JobTitle == ""){
            return true;
          } else if (searchParams.JobTitle != "") {
            if(item?.JobTitle?.toLowerCase().includes(searchParams.JobTitle) || 
            item?.ClientName?.toLowerCase().includes(searchParams.JobTitle))
           {
              return true;
            }
        }
        return false;
        });
        setSearchJobs(results);
      }

      useEffect(() => {
        const getCurrentJobOpening = allJobs.length && allJobs?.find(Jobopening => id === Jobopening._id);
        setActiveJob(getCurrentJobOpening);
      }, [allJobs]);
    
      const showActiveJob = async (id) => {
        const getCurrentJobOpening = allJobs.length && allJobs?.find(Jobopening => id === Jobopening._id);
        setActiveJob(getCurrentJobOpening);
        setActiveJobId(id);
      };

      const deleteSelectedJobOpening = async () => {
        const JobOpeningDelete = await deleteJobOpening(activeJobId);
        if(JobOpeningDelete){
            toast.success("Successfully deleted")
        } else{
            toast.success("Error in deleting JobOpening")
        }
        setModalShow(false)
        const getUpdatedJobsList = await getAllJobOpenings();
        setAllJobs(getUpdatedJobsList?.data?.Jobopenings);
        setSearchJobs(getUpdatedJobsList?.data?.Jobopenings);
      }
   
    return (
        <div className='col-md-10'>
            <div className='bg-white pb-5 pt-4 px-4 content'>
                <div className='d-flex flex-row'>
                    <h5 className='headings'>Job Openings</h5>
                    <div className='line'></div>    
                </div>
                <div id='search' className="mx-2 px-3 d-flex flex-row position-relative">
                    <img className='h-50 position-relative my-3 mx-0 top-0 start-0' src={Search} alt={'Search'} />
                    <input type="text" className="border-0 form-control search" placeholder="Search" 
                    onChange={e => setFilterParams("JobTitle", e.target.value.toLowerCase())}/>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="p-4 jobs mt-4">
                            {searchJobs?.length && searchJobs?.map((eachJob) => (
                                <div id="job1" className={`inner p-3 mb-2 mt-2' ${
                                    activeJobId === eachJob._id ? "activeJob" : ""
                                  }`} onClick={() => showActiveJob(eachJob._id)}>
                                    <div className='mb-2 d-flex flex-row justify-content-between'>
                                        <div className='jobtitle'>JO00{eachJob?.JobID} - {eachJob?.ClientName} - {eachJob?.JobTitle}</div>    
                                        <img src={Arrowright} alt={'Arrow right'}/>
                                    </div>
                                  
                                    <div className='d-flex flex-row'>
                                        <div className='col px-0 client'><img src={User} alt={'User'}/>Williams</div>
                                        <div className='datetime mx-2 col-md-auto'>10-08-2022</div>
                                        <div className='datetime col-md-2'>02:05pm</div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>

                        <div className='col-md-6 mt-4'>
                        {activeJob &&<div className='h-auto jobs mb-3 px-4 pt-2 py-5'>
                                <div className='d-flex flex-row justify-content-between'>
                                    <div className='col-md-10 my-2 headings'>JO00{activeJob?.JobID} - {activeJob?.ClientName} - {activeJob?.JobTitle}</div>
                                    <Button className='col-md-1 px-4' variant='link' onClick={() => setModalShow(true)}>
                                        <img src={Delete} alt={'Delete'}/>
                                    </Button>
                                    <DeleteTask show={modalShow} onHide={() => setModalShow(false)} onClick={deleteSelectedJobOpening}/>
                                    <div className='col-md-1 px-2 d-flex align-items-center'>
                                        <Link to={`/editjobopening/${activeJob._id}`}><img src={Edit} alt={'Edit'}/></Link>
                                    </div>
                                </div>
                                <div className='applied text-decoration-underline'>15 Applied</div>
                                <div className='mt-4 px-3 py-2 job-details'>
                                    <div className='my-2 subheadings'>Due Date</div>
                                    <div className='my-1 details'>{activeJob?.Duedate}</div>
                                    <div className='my-2 subheadings'>Location</div>
                                    <div className='my-1 details'>{activeJob?.Location}</div>
                                    <div className='my-2 subheadings'>Positions to be filled</div>
                                    <div className=' details'>{activeJob?.Positionstohire}</div>
                                </div>
                                <div className='p-2'>
                                    <div className='subheadings'>{activeJob?.JobTitle}</div>
                                    <div className="heading">Skills</div>
                                    <div className='d-flex flex-row align-content-start flex-wrap'>
                                        {activeJob?.Skills?.map(eachSkill => 
                                        <button className='skills m-1 rounded-pill px-2 d-flex align-items-center' type='button'>{eachSkill?.skills}
                                        </button>
                                        )}
                                    </div>
                                    <div className="heading">CTC(Per Annum)</div>
                                    <div>{activeJob?.Budget}</div>
                                    <div className="heading">Job Type</div>
                                    <div>{activeJob?.JobType}</div>
                                    <div className="heading">Experience</div>
                                    <div>{activeJob?.Experience}</div>
                                    <div className="heading">Job Description</div>
                                    <div className='py-1 scroll d-flex align-content-start flex-wrap'>
                                        <div>1. Conducting user research and testing. </div>
                                        <div>2. Collaborating with Designers and Developers to create intuitive, user-friendly software.</div>
                                        <div>3. Create personas through user research and data.</div>
                                        <div>4. Collaborating with Designers and Developers to create intuitive, user-friendly software.</div>
                                        <div>5. Conducting user research and testing.</div>
                                        <div>6. Create personas through user research and data.</div>        
                                    </div>
                                </div>
                            </div> }


                            {activeJob &&<div className='jobs p-3 container'>
                                <div className='row'>
                                    <div className='headings'>Candidates Applied</div>
                                    <div  id='candidates_container' className="px-3 mt-4">
                                        <div className='py-2 mb-2 px-4 tiles container'>
                                            <div className='row'>
                                                <div className='col-md-2'>
                                                    <div className='icon d-flex justify-content-center align-items-center'>RS</div>
                                                </div>
                                                <div className='col-md-8'>
                                                    <div className=''>
                                                        <div className='d-flex justify-content-start flex-column'>
                                                            <div className='name'>C001 - Robert Stuart</div>
                                                            <div className='pt-2 d-flex flex-row justify-content-between'>
                                                                <div className='role'>Visual Designer</div>
                                                                <div className='role'>5 years experience</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-2 position-relative'>
                                                    <div className='format d-flex flex-row justify-content-end'>
                                                        <div id='candidatestatus' className=''>Rejected</div> 
                                                        <button type="button" className="btn dropdown" data-toggle="dropdown"> 
                                                            <img id='format' src={Dropdownicon} alt={'Options'}/>
                                                        </button>
                                                        <div id='formcheck' className="dropdown-menu p-2" aria-labelledby="dropdownMenuButton">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">Available</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">In Process</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">Client Submitted</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">Interview Scheduled</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">Hired</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput" checked/>
                                                                <label className="form-check-label" for="radioinput">Rejected</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>   
                                            </div>
                                        </div> 

                                        <div className='py-2 mb-2 px-4 tiles container'>
                                            <div className='row'>
                                                <div className='col-md-2'>
                                                    <div ><img id='user' src={Userlarge} alt={'User'}/></div>
                                                </div>
                                                <div className='col-md-8'>
                                                    <div className=''>
                                                        <div className='d-flex justify-content-start flex-column'>
                                                            <div className='name'>C002 - Venugopala Mutthuswamy</div>
                                                            <div className='pt-2 d-flex flex-row justify-content-between'>
                                                                <div className='role'>UX UI Designer</div>
                                                                <div className='role'>8.3 years experience</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-2 position-relative'>
                                                    <div className='format d-flex flex-row justify-content-end'>
                                                        <div id='candidatestatus' className=''>Rejected</div> 
                                                        <button type="button" className="btn dropdown" data-toggle="dropdown"> 
                                                            <img id='format' src={Dropdownicon} alt={'Options'}/>
                                                        </button>
                                                        <div id='formcheck' className="dropdown-menu p-2" aria-labelledby="dropdownMenuButton">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">Available</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">In Process</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">Client Submitted</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">Interview Scheduled</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">Hired</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">Rejected</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>   
                                            </div>
                                        </div>

                                        <div className='py-2 mb-2 px-4 tiles container'>
                                            <div className='row'>
                                                <div className='col-md-2'>
                                                    <div ><img id='user' src={Userlarge} alt={'User'}/></div>
                                                </div>
                                                <div className='col-md-8'>
                                                    <div className=''>
                                                        <div className='d-flex justify-content-start flex-column'>
                                                            <div className='name'>C003 - Paul Timberly</div>
                                                            <div className='pt-2 d-flex flex-row justify-content-between'>
                                                                <div className='role'>UI Designer</div>
                                                                <div className='role'>6 years experience</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-2 position-relative'>
                                                    <div className='format d-flex flex-row justify-content-end'>
                                                        <div id='candidatestatus' className=''>In Process</div> 
                                                        <button type="button" className="btn dropdown" data-toggle="dropdown"> 
                                                            <img id='format' src={Dropdownicon} alt={'Options'}/>
                                                        </button>
                                                        <div id='formcheck' className="dropdown-menu p-2" aria-labelledby="dropdownMenuButton">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">Available</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">In Process</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">Client Submitted</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">Interview Scheduled</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">Hired</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">Rejected</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>   
                                            </div>
                                        </div>

                                        <div className='py-2 mb-2 px-4 tiles container'>
                                            <div className='row'>
                                                <div className='col-md-2'>
                                                    <img id='user' src={Userlarge} alt={'User'}/>
                                                </div>
                                                <div className='col-md-8'>
                                                    <div className=''>
                                                        <div className='d-flex justify-content-start flex-column'>
                                                            <div className='name'>C004 - Kent Amron</div>
                                                            <div className='pt-2 d-flex flex-row justify-content-between'>
                                                                <div className='role'>UX UI Designer</div>
                                                                <div className='role'>9 years experience</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-2 position-relative'>
                                                    <div className='format d-flex flex-row justify-content-end'>
                                                        <div id='candidatestatus' className=''>Available</div> 
                                                        <button type="button" className="btn dropdown" data-toggle="dropdown"> 
                                                            <img id='format' src={Dropdownicon} alt={'Options'}/>
                                                        </button>
                                                        <div id='formcheck' className="dropdown-menu p-2" aria-labelledby="dropdownMenuButton">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">Available</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">In Process</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">Client Submitted</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">Interview Scheduled</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">Hired</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="status" id="radioinput"/>
                                                                <label className="form-check-label" for="radioinput">Rejected</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>   }   
                        </div>
                    </div>
                </div>
                </div>
            </div>

    )
}
