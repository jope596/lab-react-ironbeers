import React from 'react'
import { NavLink } from 'react-router-dom';
import homeBtn from "../../assets/home-page.png";

function Navbar() {
  return (
    <div>

<div>
        <NavLink to="/">
          <img src={homeBtn} alt="home button" />
          
        </NavLink>
        
      </div>

    </div>
  )
}

export default Navbar