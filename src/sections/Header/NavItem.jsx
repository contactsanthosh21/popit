import React from 'react'

const NavItem = ({label, to}) => {
  return (
    <>
        <a className='header__nav__nav-item' href={to}>{label}</a>
    </>
  )
}

export default NavItem