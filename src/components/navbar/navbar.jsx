import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/StackOverflowIcon.png';
import search from '../../assets/SearchIcon.png';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import './navbar.css'




const Navbar = () => {

var user = null

  return (
    <nav className="navbar">
      <Link to="/" className="nav-item nav-logo">
        <img src={logo} alt="logo" className="logo" width='180' />
      </Link>
      <Link to = '/' className='nav-item nav-btn'> About </Link>
      <Link to = '/' className='nav-item nav-btn'> Products </Link>
      <Link to = '/' className='nav-item nav-btn'>For Teams</Link>

      <form>
        <input type="text" placeholder='Search...' />
        <img src={search} alt='search' width='18' className='search-icon'/>

        {user == null ? 
        <Link to= '/Auth' className='nav-item nav-links'>Log In</Link> :
         <>
         <Link to='/'><Avatar> A </Avatar></Link>
         <Button>Log Out</Button>

         </>
         
         }
          
      </form>
    </nav>
  );
};

export default Navbar;
