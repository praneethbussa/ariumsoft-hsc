import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Person from '../../Images/Person.svg';
import Tick from '../../Images/Tick.svg';
import Edit from '../../Images/Edit.svg';
import Line from '../../Images/Line.svg';
import File from '../../Images/File.svg';

import SaveJob from './SaveJob';
import './ChangeStatus.css';

export default function ChangeStatus() {

    const [show, setShow] = useState(true);
    const hideButton = ()=>{
        setShow(false);
    }
    const [isShown, setIsShown] = useState(false);
    const showContent = ()=> {
        setIsShown(true);
    };
    const hideContent = ()=>{
        setIsShown(false);
        setShow(true);
    };

    return (
        <div className='col-sm-10'>
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
                    {isShown && (
                        <div className='w-25 position-absolute top-0 end-0 d-flex flex-row'>
                            <button onClick={hideContent} id='cancel' className='bg-white w-100 mx-2 btn btn-primary px-4 py-3'>Cancel</button>  
                            <Link to={'/'} id='button' className='w-100 btn btn-primary px-4 py-3'>Save</Link>
                        </div>    
                    )}
                    {show && (
                        <button onClick={() => {hideButton(); showContent();}} id='button' className='btn btn-primary px-4 py-3 position-absolute top-0 end-0'>Change Status</button>
                    )}    
                </div>
                <div id='role'>Interaction Designer</div>
                <div className='my-2 status'>Available</div>
                {isShown && <SaveJob />}
                <div className='my-1 head d-flex flex-row'>
                    <div className='active col-1'>Profile</div>
                    <div className='col-1'>Status</div>
                    <div className='col-1'>Notes</div>
                </div>
                <img className='underline' src={Line} alt={'Line'}/> 
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
