import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo.svg')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/tradingpair' activeStyle>
          Trading pair list
          </NavLink>
          <NavLink to='/appbinding' activeStyle>
          API binding

          </NavLink>
          <NavLink to='/trading-records' activeStyle>
          Trading Records

          </NavLink>
          <NavLink to='/billing' activeStyle>
          Billing Details
          </NavLink>
          <NavLink to='/sign' activeStyle>
          Circle
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Setting</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
