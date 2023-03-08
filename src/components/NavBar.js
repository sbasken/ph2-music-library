import React from 'react'
import { NavLink } from "react-router-dom"

const linkStyles = {
  display: "inline-block",
  width: "80px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#78d5ff",
  textDecoration: "none",
  color: "white"
};

function NavBar() {
  return (
    <div className="navbar">
      <NavLink 
        exact 
        to="/"
        style={linkStyles}
        activeStyle={{
          background: "#0081e8"
        }}
        className="navbar button"
      >
        Home
      </NavLink>
      <NavLink 
        to="/about"
        style={linkStyles}
        activeStyle={{
          background: "#0081e8"
        }}
        className="navbar button"
      >
        About
      </NavLink>
      <NavLink 
        to="/newform"
        style={linkStyles}
        activeStyle={{
          background: "#0081e8"
        }}
        className="navbar button"
      >
        New Form
      </NavLink>
      {/* <NavLink 
        to="/edit"
        style={linkStyles}
        activeStyle={{
          background: "#0081e8"
        }}
        className="navbar button"
      >
        Edit Form
      </NavLink> */}
    </div>
  )
}

export default NavBar