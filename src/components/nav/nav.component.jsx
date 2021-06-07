import React from "react"

import "./nav.styles.scss"

const Nav = () => {
  return (
    <nav id='nav-bar'>
      <div id='logo-container'>
        <h1 id='logo'>CA</h1>
      </div>
      <div className='nav-links'>
        <ul>
          <li>Home</li>
          <li>Sign In</li>
          <li>Sign Up</li>
          <li>About</li>
          <li>gotMilk?</li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
