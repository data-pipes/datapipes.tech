import React from 'react';
import logo from 'src/static/logo.svg';

import Link from "gatsby-link"
import { Link as SLink } from 'react-scroll';

import {
  NavItems,
  NavItem,
} from './Navbar.style';

import ToggleSwitch from 'src/components/common/ToggleSwitch';


const NavDesktop = () => {
  return (
    <>
      <SLink className="logo" smooth offset={-100} hashSpy={true} to="/">
        <img src={logo} alt="Ivan Atanasov" />
      </SLink>

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