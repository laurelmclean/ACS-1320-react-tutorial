import React from 'react'
import './Title.css';
import { NavLink } from 'react-router-dom'
import RandomSpace from '../RandomSpace/RandomSpace'

function Title() {
  return (
    <section className="Title">
      <header>
        <h1>SFPOPOS</h1>
        <h2 className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</h2>

        <nav role="navigation">
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/">List</NavLink>
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/about">About</NavLink>
          <NavLink
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
            to="/register">Register</NavLink>
        </nav>
          <RandomSpace />
      </header>
    </section>
  )
}

export default Title;