import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';


import insta2 from '../Images/insta2.jpg';
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={insta2} alt="logo" className='logo' />
      <ul className='navbar-menu'>
        <Link to="signin"> <li>SignIn</li></Link> 
        <Link to="signup"><li>SignUp</li></Link>
        <Link to="profile"><li>Profile</li></Link>
      
      </ul>

    </div>
  )
}

export default Navbar;
