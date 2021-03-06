import React from 'react';
import logo from 'src/static/logo.svg';

import Link from "gatsby-link"

import {
  NavItems,
  NavItem,
} from './Navbar.style';

import ToggleSwitch from 'src/components/common/ToggleSwitch';


const NavDesktop = () => {
  return (
    <>
      <Link className="logo" to="/">
        <img src={logo} alt="Data pipes" />
      </Link>

      <nav>
        <NavItems>
          <NavItem><Link to="/blog">blog</Link></NavItem>
          <NavItem>
            <ToggleSwitch />
          </NavItem>
        </NavItems>
      </nav>
    </>
  )
}

export default NavDesktop;