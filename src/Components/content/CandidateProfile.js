import React from 'react'

import Line from '../../Images/Line.svg';
import File from '../../Images/File.svg';

export default function CandidateProfile() {
  return (
    <div>
        <div className='d-flex flex-row'>
            <div className='col-1'><img className='underline mb-4' src={Line} alt={'Line'}/></div>
            <div className='col-1'></div>
            <div className='col-1'></div>
        </div>
        
        <div className='heading'>Contact Details</div>    
                <div className='contact col-3 p-2'>mjacob@gmail.com</div>
                <div className='contact col-3 p-2 my-2'>+11234-567-890</div>
                <div className='heading'>Education & Experience</div>
                <div>Post Graduate</div>
                <div>5.2 years</div>
                <div className='heading'>Skills</div>
                <div className='my-2 d-flex flex-row'>
                    <div className='skills rounded-pill px-2 d-flex align-items-center'style={{marginRight:"4px"}}>Adobe Suite</div>
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
  )
}
