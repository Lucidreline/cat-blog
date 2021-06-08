import React from "react"

import "./nav.styles.scss"

const Nav = () => {
  return (
    <div className='nav-bar-container'>
      <nav id='nav-bar'>
        <div id='logo-container'>
          <h1 id='logo'>CB</h1>
        </div>
        <div className='nav-links'>
          <ul>
            <li className='active-link'>Home</li>
            <li>Sign In</li>
            <li>Sign Up</li>
            <li>About</li>
            <li>gotMilk?</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
