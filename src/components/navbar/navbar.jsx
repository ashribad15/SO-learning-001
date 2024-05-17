import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/StackOverflowIcon.png';
import search from '../../assets/SearchIcon.png';
import Avatar from '../../components/Avatar/Avatar';
import './navbar.css';

const Navbar = () => {
  const user = 123;

  return (
    <nav className="navbar">
      <Link to="/" className="nav-item nav-logo">
        <img src={logo} alt="logo" className="logo" width='180' />
      </Link>
      <div className="nav-items">
        <Link to='/' className='nav-item nav-btn'> About </Link>
        <Link to='/' className='nav-item nav-btn'> Products </Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
      </div>
      <form className="search-form">
        <input type="text" placeholder='Search...' />
        <img src={search} alt='search' width='18' className='search-icon'/>
        <div className="avatar-wrapper">
          {user == null ? (
            <Link to='/Auth' className='nav-item nav-links'>Log In</Link>
          ) : (
            <>
              <Avatar backgroundColor='#009dff' size="30px" color="white">
  <Link to='/' style={{ color: "white", textDecoration: "none" }}>A</Link>
</Avatar>

              <button className='nav-item nav-links'><span style={{ whiteSpace: 'nowrap' }}>Log Out</span></button>
            </>
          )}
        </div>
      </form>
    </nav>
  );
};

export default Navbar;