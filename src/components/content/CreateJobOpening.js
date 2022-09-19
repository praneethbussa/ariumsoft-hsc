import React from 'react'
import { Link } from 'react-router-dom';

import Addskill from '../../Images/Addskill.svg';

import './CreateJobOpening.css'

export default function CreateJobOpening() {
  return (
    <div className='col-md-10 mx-4'>
        <div className='bg-white pb-1 pt-4 px-4 content'>
            <div className='pb-2 d-flex flex-row'>
                    <h5 className='headings'>Create Job Opening</h5>
                    <div className='line'></div>    
            </div>
            <div className='mb-1'>
                <div className="pb-2 heading">Contact Details</div>
                <div className='d-flex flex-row my-2'>
                    <form className="col-md-3 form-floating">
                        <input type="text" className="form-control" id="floatingInputValue" placeholder="User Experience Designer" value="User Experience Designer"/>
                        <label for="floatingInputValue">Job Title</label>
                    </form>
                    <form className="form-floating col-md-3 mx-3">
                        <input type="text" className="form-control" id="floatingInputValue" placeholder="JO002" value="JO002"/>
                        <label for="floatingInputValue">Job ID</label>
                    </form>
                </div>

                <div className='d-flex flex-row my-2'>
                    <form className="col-md-3 form-floating">
                        <input type="text" className="form-control" id="floatingInputValue" placeholder="Facebook" value="Facebook"/>
                         <label for="floatingInputValue">Client Name</label>
                    </form>
                    <form className="col-md-3 mx-3 form-floating">
                        <input type="text" className="form-control" id="floatingInputValue" placeholder="Location" />
                        <label for="floatingInputValue">Location</label>
                    </form>
                    <form className="col-md-2 form-floating">
                        <input type="text" className="form-control" id="floatingInputValue" placeholder="Positions to hire" />
                        <label for="floatingInputValue">Positions to hire</label>
                    </form>
                </div>
                
                <div className='d-flex flex-row'>
                    <form className="col-md-3 form-floating">
                        <input type="text" className="form-control" id="floatingInputValue" placeholder="Permanent" value="Permanent"/>
                        <label for="floatingInputValue">Job Type</label>
                    </form>
                    <form className="col-md-3 mx-3 form-floating">
                        <input type="text" className="form-control" id="floatingInputValue" placeholder="10th September 2022" value="10th September 2022"/>
                        <label for="floatingInputValue">Due Date</label>
                    </form>
                    <form className="col-md-2 form-floating">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>5-7 years</option>
                            <option value="1">7-10 years</option>
                            <option value="2">0-2 years</option>
                            <option value="3">3-4 years</option>
                        </select>
                        <label for="floatingInputValue">Experience</label>
                    </form>
                </div>
            </div>
            
            <div className='my-2'>
                <div className="heading">Skills</div>
                <div className='d-flex flex-row my-3'>
                    <div className='col-md-4'>
                    
                        <form className="form-floating input-group">
                            <input type="text" className="form-control" id="floatingInputValue" placeholder="Design Strategy" value="Design Strategy"/>
                            <span className="input-group-text bg-white" id="basic-addon2">
                                <img src={Addskill} alt={'Add skill'}/>
                            </span>
                            <label for="floatingInputValue">Add Skill</label>
                        </form>
                    </div>
                </div>
                
                <div className='skillname'>You can only add up to five skills</div>
                    <div className='d-flex flex-row'>
                        <button className='skills mx-1 rounded-pill px-2 d-flex align-items-center' type='button'>Adobe Suite</button>
                        <button className='skills mx-1 rounded-pill px-2 d-flex align-items-center' type='button'>Interaction</button>
                        <button className='skills mx-1 rounded-pill px-2 d-flex align-items-center' type='button'>Information Architecture</button>
                        <button className='skills mx-1 rounded-pill px-2 d-flex align-items-center' type='button'>Layout Design</button>
                    </div>
            </div>
                            
            <div className='my-2'>
                <div className="heading">Budget</div>
                <div className='d-flex flex-row'>
                    <div className='col-md-3'>
                        <form className="form-floating">
                            <input type="text" className="form-control" id="floatingInputValue" placeholder="$000,000" value="$000.000"/>
                            <label for="floatingInputValue">CTC(Per Annum)</label>
                        </form>
                    </div>                                    
                </div>
            </div>
            
            <div className='my-2'>
                <div className="heading">Job Description</div>
                <div className='d-flex flex-row'>
                    <div className='col-md-7'>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Type Something...'></textarea>
                    </div>                                    
                </div>
            </div>
            
            <div className='my-4'>
                <div className='d-flex flex-row justify-content-between'>
                    <div className='col-md-3'>
                        <Link to={"/mytasks"} className='btn btn-primary bg-white d-flex align-items-center justify-content-center' id='cancel'>Cancel</Link>
                    </div>
                    <div className='col-md-3'>
                        <Link to={"/mytasks"} className='btn btn-primary d-flex align-items-center justify-content-center text-white' id='save'>Save</Link>
                    </div>
                </div>
            </div>
                        
                        </div>
                        
                    </div>
               
  )
}
