import React from 'react';

import Dashboard from '../Images/Dashboard.svg';
import Mytasks from '../Images/Mytasks.svg';
import Jobopenings from '../Images/Jobopenings.svg';
import Candidates from '../Images/Candidates.svg';
import { Link} from 'react-router-dom';

export default function Navbar() {
  return (
    // <div className='col-sm-2 align-items-sm-start' style={{marginRight: 0, display:'inline-block'}}>
     <div className='navbar-container'>
        <div className="nav flex-column bg-white sidenav">
            <div className="nav-item">
                <Link to="/" id="dashlink" className="nav-link"><img src={Dashboard} alt={'dashboard'} className="link"/>Dashboard</Link>
            </div>
            <div className="nav-item">
                <Link to="/mytasks" id="navlink" className="nav-link"><img src={Mytasks} alt={'my tasks'} className="link"/>My Tasks</Link>
            </div>
            <div className="nav-item">
                <Link to="/jobOpenings" id="navlink" className="nav-link"><img src={Jobopenings} alt={'job openings'} className="link"/>Job Openings</Link>
            </div>
            <div className="nav-item">
                <Link to="/candidates" id="navlink" className="nav-link"><img src={Candidates} alt={'candidates'} className="link"/>Candidates</Link>
            </div>
        </div>
    </div>
  )
}
