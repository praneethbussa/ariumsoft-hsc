import React,{useEffect, useState} from 'react'

import Line from '../../Images/Line.svg';
import File from '../../Images/File.svg';
import { getCandidateInfo } from '../helpers/api/candidate';


export default function CandidateProfile({candidateDetails}) {
    const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    (async () => {
      setCandidates(await getCandidateInfo());
    })();
  }, []);
  console.log(candidateDetails?.results?.City, "cc profile")
  return (
    <div>
        <div className='d-flex flex-row'>
            <div className='col-1'><img className='underline mb-4' src={Line} alt={'Line'}/></div>
            <div className='col-1'></div>
            <div className='col-1'></div>
        </div>
        
        <div className='heading'>Contact Details</div>    
                <div className='contact col-3 p-2'>{candidateDetails?.results?.Email}</div>
                <div className='contact col-3 p-2 my-2'>{candidateDetails?.results?.Mobile}</div>
                <div className='heading'>Education & Experience</div>
                <div>{candidateDetails?.results?.Qualification}</div>
                <div>{candidateDetails?.results?.Experience}</div>
            <div className='heading'>Job Type Prefered</div>
                <div>{candidateDetails?.results?.Jobtype}</div>
            <div className='heading'>Address</div>
                <div>{candidateDetails?.results?.AddressLine1}</div>
                <div>{candidateDetails?.results?.AddressLine2}</div>
                <div>{candidateDetails?.results?.City}</div>
                <div>{candidateDetails?.results?.State}</div>
                <div>{candidateDetails?.results?.Country} - {candidateDetails?.results?.Zipcode}</div>  
            <div className='heading'>Recruiter</div>
                <div>Williams</div>
            <div className='heading'>Attachments</div>
                <div className='col-4 p-3 card d-flex flex-row position-relative'>
                    <img className='file' src={File} alt={'File'}/> 
                    <div>{candidateDetails?.results?.Upload}</div>
                    <div className='format'>HSC Formated</div>
                </div>
                <div className='col-4 p-3 my-2 card d-flex flex-row'>
                    <img className='file' src={File} alt={'File'}/> 
                    design_portfolio.pdf
                </div>
    </div>
  )
}
