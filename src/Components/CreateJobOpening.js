import React from 'react'
import { Link } from 'react-router-dom';

import Addskill from "../Images/Addskill.svg";
import "../assets/CreateJobOpening.css";

export default function CreateJobOpening() {
  return (
    <div className='jobopening'>
        <div className='card'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='container my-3'>
                            <h6 id="heading">Contact Details</h6>
                                <div className='row my-2'>
                                    <div className='col-3'>
                                        <form class="form-floating">
                                            <input type="text" class="form-control" id="floatingInputValue" placeholder="User Experience Designer" value="User Experience Designer"/>
                                            <label for="floatingInputValue">Job Title</label>
                                        </form>
                                    </div>
                                    <div className='col-3'>
                                        <form class="form-floating">
                                            <input type="text" class="form-control" id="floatingInputValue" placeholder="JO002" value="JO002"/>
                                            <label for="floatingInputValue">Job ID</label>
                                        </form>
                                    </div>
                                </div>
                                <div className='row my-2'>
                                    <div className='col-3'>
                                        <form class="form-floating">
                                            <input type="text" class="form-control" id="floatingInputValue" placeholder="Facebook" value="Facebook"/>
                                            <label for="floatingInputValue">Client Name</label>
                                        </form>
                                    </div>
                                    <div className='col-3'>
                                        <form class="form-floating">
                                            <input type="text" class="form-control" id="floatingInputValue" placeholder="Location" />
                                            <label for="floatingInputValue">Location</label>
                                        </form>
                                    </div>
                                    <div className='col-2'>
                                        <form class="form-floating">
                                            <input type="text" class="form-control" id="floatingInputValue" placeholder="Positions to hire" />
                                            <label for="floatingInputValue">Positions to hire</label>
                                        </form>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-3'>
                                        <form class="form-floating">
                                            <input type="text" class="form-control" id="floatingInputValue" placeholder="Permanent" value="Permanent"/>
                                            <label for="floatingInputValue">Job Type</label>
                                        </form>
                                    </div>
                                    <div className='col-3'>
                                        <form class="form-floating">
                                            <input type="text" class="form-control" id="floatingInputValue" placeholder="10th September 2022" value="10th September 2022"/>
                                            <label for="floatingInputValue">Due Date</label>
                                        </form>
                                    </div>
                                    <div className='col-2'>
                                        <form class="form-floating">
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>5-7 years</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <label for="floatingInputValue">Experience</label>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <h6 id="heading">Skills</h6>
                                <div className='row my-3'>
                                    <div className='col-4'>
                                        <form class="form-floating input-group">
                                            <input type="text" class="form-control" id="floatingInputValue" placeholder="Design Strategy" value="Design Strategy"/>
                                            <span class="input-group-text bg-white" id="basic-addon2">
                                                <img src={Addskill} alt={'Add skill'}/></span>
                                            <label for="floatingInputValue">Add Skill</label>
                                        </form>
                                    </div>
                                </div>
                                <h6 className='col text'>You can only add up to five skills</h6>
                                <div className='row'>
                                    <button className='skills col-1 rounded-pill' type='button'>Adobe Suite</button>
                                    <button className='skills col-1 rounded-pill' type='button'>Interaction</button>
                                    <button className='skills col-2 rounded-pill' type='button'>Information Architecture</button>
                                    <button className='skills col-2 rounded-pill' type='button'>Layout Design</button>
                                </div>
                            </div>
                            <div className='container'>
                                <h6 id="heading">Budget</h6>
                                <div className='row'>
                                    <div className='col-3'>
                                        <form class="form-floating">
                                            <input type="text" class="form-control" id="floatingInputValue" placeholder="$000,000" value="$000.000"/>
                                            <label for="floatingInputValue">CTC(Per Annum)</label>
                                        </form>
                                    </div>                                    
                                </div>
                            </div>
                            <div className='container'>
                                <h6 id="heading">Job Description</h6>
                                <div className='row'>
                                    <div className='col-7'>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Type Something...'></textarea>
                                    </div>                                    
                                </div>
                            </div>
                            <div className='container my-5'>
                                <div className='row d-flex justify-content-between'>
                                    <div className='col-3 d-flex justify-content-start'>
                                        <Link to={"/mytasks"} className='btn btn-primary bg-white d-flex align-items-center justify-content-center' id='cancel'>Cancel</Link>
                                    </div>
                                    <div className='col-3 d-flex justify-content-end'>
                                    <button type='button' className='save text-white'>Save</button>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        
                    </div>
                </div>
            
        </div>
    </div>
  )
}
