import React, { useState, useEffect } from 'react';
import ContactButton from './ContactButton';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './Button.css';


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

  useEffect( () => {
    showButton();
  }, [] );

  window.addEventListener('resize', showButton);

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link
            to='/'
            className='navbar-logo'
            onClick={ closeMobileMenu }
          >
            Ken Livesey
            <i className="fas fa-terminal" />
          </Link>
          <div
            className='menu-icon'
            onClick={ handleClick }
          >
            <i className={ click ? 'fas fa-times' : 'fas fa-bars' } />
          </div>
          <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={ closeMobileMenu }
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={ closeMobileMenu }
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/skills'
                className='nav-links'
                onClick={ closeMobileMenu }
              >
                Skills
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/history'
                className='nav-links'
                onClick={ closeMobileMenu }
              >
                History
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='nav-links-mobile'
                onClick={ closeMobileMenu }
              >
                Contact me
              </Link>
            </li>
          </ul>
          {button && <ContactButton buttonStyle='btn--outline'>Contact me</ContactButton> }
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
