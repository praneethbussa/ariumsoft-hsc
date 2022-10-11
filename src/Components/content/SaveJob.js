import React from 'react'
import './SaveJob.css';

export default function SaveJob() {
    return (
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
                        <option value="1">Hired</option>
                        <option value="2">Rejected</option>
                        <option value="3">Withdrawn</option>
                        <option value="4">Interview Scheduled</option>
                        <option value="5">On Hold</option>
                    </select>
                    <label for="floatingInputValue">Status</label>
                </form>
            </div>
        </div>
    )
}
