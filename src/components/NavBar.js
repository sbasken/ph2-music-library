import React from 'react'
import { NavLink } from "react-router-dom"

const linkStyles = {
  display: "flex",
  "justify-content": "center",
  width: "80px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "grey",
  opacity: "90%",
  textDecoration: "none",
  color: "white"
};

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar column">
      <NavLink 
        exact 
        to="/"
        style={linkStyles}
        activeStyle={{
          background: "black"
        }}
        className="navbar button"
      >
        Home
      </NavLink>
      <NavLink 
        to="/about"
        style={linkStyles}
        activeStyle={{
          background: "black"
        }}
        className="navbar button"
      >
        About
      </NavLink>
      <NavLink 
        to="/newform"
        style={linkStyles}
        activeStyle={{
          background: "black"
        }}
        className="navbar button"
      >
        New Form
      </NavLink>
      </div>
    </div>
  )
}

export default NavBar