import React from 'react';
import { Link } from 'react-router-dom'
import "./Header.css"


const Header = () => {
  return (
      <header className='header'>
        <div>
            <h1>
                <Link to='/' className='logo'>
                    Electronic Shop
                </Link>
            </h1>
        </div>
        <div className='header-links'>
            <ul>
                <li>
                    <Link to='/signup'>Signup</Link>                
                </li>
            </ul>
        </div>
        <div className='header-links'>
            <ul>
                <li>
                    <Link to='/cart'>Cart</Link>                
                </li>
            </ul>
        </div>
      </header>
  )
};

export default Header;
