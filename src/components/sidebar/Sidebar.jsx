import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from "../../assets/images/triumf.png"

export const Sidebar = () => {
  return (
    <div className='bg-sidebar p-10'>
      <img src={logo} alt="Triumf logo" />
      <ul>
        <li><NavLink>aaaa</NavLink></li>
        <li><NavLink>aaaa</NavLink></li>
        <li><NavLink>aaaa</NavLink></li>
        <li><NavLink>aaaa</NavLink></li>
        <li><NavLink>aaaa</NavLink></li>
        <li><NavLink>aaaa</NavLink></li>
      </ul>
    </div>
  )
}
