import React from 'react'
import {Outlet} from 'react-router-dom'
import NavbarOutlet from './NavOutlet'

const Navbar = () => {
  return (
    <>
    <NavbarOutlet/>
        <Outlet/>
    </>
  )
}

export default Navbar