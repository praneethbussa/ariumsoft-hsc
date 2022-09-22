import React from 'react'

import Dashboard from '../Images/Dashboard.svg';
import Mytasks from '../Images/Mytasks.svg';
import Jobopenings from '../Images/Jobopenings.svg';
import Candidates from '../Images/Candidates.svg';

import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='col-md-2 align-items-start' style={{marginRight:"0px",paddingLeft:"0px"}}>
      <div className="d-flex flex-column flex-nowrap bg-white sidenav px-4">
        <NavLink to="/" style={({ isActive }) => ({color: isActive ? '#F88022' : '#021668',fontSize:"16px",fontWeight:"500"})} className='dashboard my-2'>
          <img src={Dashboard} alt={'dashboard'} className="link"/>Dashboard
        </NavLink>
        <NavLink to="/mytasks" style={({ isActive }) => ({color: isActive ? '#F88022' : '#0C0C0C',})} className='my-2'>
          <img src={Mytasks} alt={'my tasks'} className="link"/>My Tasks
        </NavLink>
        <NavLink to="/searchjobopening" style={({ isActive }) => ({color: isActive ? '#F88022' : '#0C0C0C',})} className="my-2">
          <img src={Jobopenings} alt={'job openings'} className="link"/>Job Openings
        </NavLink>
        <NavLink to="/candidates" style={({ isActive }) => ({color: isActive ? '#F88022' : '#0C0C0C',})} className="my-2">
          <img src={Candidates} alt={'candidates'} className="link"/>Candidates
        </NavLink>
      </div>
    </div>
  )
}