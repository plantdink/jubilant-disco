import React, { useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

import './Navbar.css';


function Navbar() {
  const [ click, setClick ] = useState(false);
  const [ button, setButton ] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <div>
      <nav className={Navbar}>
        <div className="navbar-container">
          <Link to='/' className='navbar-logo'>
            Ken Livesey <i class="fas fa-headphones"></i>
          </Link>
          <div className="menu-icon" onClick={ handleClick }>
            <i class={ click ? 'fas fa-times' : 'fas fa-bars' } />
          </div>
          <ul className={ click ? 'nav-manu active' : 'nav-menu' }>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/skills' className='nav-links' onClick={closeMobileMenu}>
                Skills
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/history' className='nav-links' onClick={closeMobileMenu}>
                History
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button> }
        </div>
      </nav>
    </div>
  );
}

export default Navbar
