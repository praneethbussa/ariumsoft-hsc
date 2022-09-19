import React from 'react'
import logo from "D:/ariumsoft-hsc/src/Images/hsc-logo.svg";
import settingIcon from 'D:/ariumsoft-hsc/src/Images/settingIcon.svg';
import notificationBar from 'D:/ariumsoft-hsc/src/Images/notificationBar.svg';
import profileImg from 'D:/ariumsoft-hsc/src/Images/profileImg.jpg';


const Header1 = () => {
  return (
    <div>
            <img src={logo} alt="..." className="imglogo"/><br />
            <span className="box1">
            <img src={profileImg} alt='...' className='img-profile'/>
            <img src={notificationBar} alt='...' className='notify'/>
            <img src={settingIcon} alt='...' className='settings-icon'/>
            {/* <i class="fa-sharp fa-solid fa-gear" className="settings"  style={{backgroundColor: isActive? 'blue' : 'orange'}} onClick={handleClick}></i> */}
            </span>    
    </div>
  )
}

export default Header1