import React from 'react'
import { Link } from "../../modules/Router";

const NavItem = ({children, to}) => {
  return (
    <>
        <Link className='header__nav__nav-item' to={to}>{children}</Link>
    </>
  )
}

export default NavItem