import React from 'react'
import FAZTECH from "../assets/logos/FAZTECH-LOGO.svg"

export const Navigation = () => {
  return (
    <div className='flex-div navigation'>
        <div className='logo-div'>
            <img height="100" width="200" src={FAZTECH} alt="companyLogo" />
        </div>
        <div>
            <ul className='navigation-menu-list' style={{listStyle: "none", display: "flex"}}>
                <li className="navigation-list-item">Home</li>
                <li className="navigation-list-item">Projects</li>
                <li className="navigation-list-item">Services</li>
                <li className="navigation-list-item">Solutions</li>
                <li className="navigation-list-item">Company</li>
            </ul>
        </div>
        <div className='contact-us-div'>
            <button className='contact-us-btn'>Contact Us</button>
        </div>
    </div>
  )
}
