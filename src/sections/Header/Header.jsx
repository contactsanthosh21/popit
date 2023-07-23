import React from 'react'
import NavItem from './NavItem'
import './Header.scss'

var appLogo = require('../../assets/app-logo.png');

const Header = () => {
  return (
    <div className='header'>
        <div className='header__logo app-logo'>
            <a href="/">
                <img src={appLogo} alt="app logo" />
            </a>
        </div>
        <div className="header__nav">
            <NavItem
                label='Projects'
                to='#'
            />
            <NavItem
                label='About'
                to='#'
            />
            <NavItem
                label='Contact Us'
                to='#'
            />
        </div>
    </div>
  )
}

export default Header