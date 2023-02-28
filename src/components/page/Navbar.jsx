import React from 'react'
import NavItem from './NavItem';
import NavLogin from './NavLogin';

export default function Navbar() {
const userHasLoggedIn = true;
  return (
    <div className='navbar'>
      <NavItem type={"logo"}/>
      <NavItem type={"home"}/>
      <NavItem type={"user"}/>
      <NavLogin/>
    </div>
  )
}
