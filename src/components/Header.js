import React from 'react'


import HSClogo from '../images/HSClogo.svg';
import Settings from '../images/Settings.svg';
import Notifications from '../images/Notifications.svg';
import Profilepicture from '../images/Profilepicture.png';

import './Header.css';

export default function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <img src={HSClogo} alt={'HSC Logo'} className='col-2 logo navbar-brand'/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="col-10 header collapse navbar-collapse bg-white justify-content-end" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="/"><img src={Settings} alt={'Settings'} className="settings"/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/"><img src={Notifications} alt={'Notifications'} className="notifications"/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/"><img src={Profilepicture} alt={'Profilepicture'} className="profilepicture"/></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
