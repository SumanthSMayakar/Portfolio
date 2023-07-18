import React from 'react'
import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';

function Topbar() {
  return (
    <div className='topbar' id='topbar'>
       <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>PORTFOLIO</a>
          <div className="itemContainer">
            <PersonIcon className='icon'/>
            <span>+91 8095482007</span>
          </div>
          <div className="itemContainer">
            <MailIcon className='icon'/>
            <span>sumanthmayakar@gmail.com</span>
          </div>
          <div className="itemContainer">
            <GitHubIcon className='icon'/>
            <span>SumanthSMayakar</span>
          </div>
        </div>
        <div className="right">

        </div>
       </div>
    </div>
  )
}

export default Topbar