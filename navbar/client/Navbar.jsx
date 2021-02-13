import React from 'react';

const Navbar = (props) => {
  return (
    <div id="navbar">
      <div className="navItems">
        <h1 className="title">{props.site.title}</h1>
        <h2 className="first option">Home</h2>
        <h2 className="second option">Profile</h2>
        <h2 className="third option">Contact</h2>
      </div>
    </div>
  )
}

export default Navbar;