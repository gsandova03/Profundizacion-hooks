import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    <div className="container-fluid">
        <a className="navbar-brand" href="#"> useContext </a>
        <div id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
            <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
            <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
