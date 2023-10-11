import React from 'react'
import { Link } from "../../modules/Router";

const NavItem = ({children, to, handleclosemenu}) => {

  return (
    <>
        <Link className='header__nav__nav-item' to={to} handleclosemenu={handleclosemenu}>{children}</Link>
    </>
  )
}

export default NavItem