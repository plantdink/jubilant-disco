import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link
              to='/'
              className='social-logo'
            >
              Ken Livesey <i className='fas fa-terminal' />
            </Link>
          </div>
          <small className='website-rights'>Ken Livesey © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to=''
              target='_blank'
              aria-label='GitHub'
            >
              <i className='fab fa-github-square' />
            </Link>
            <Link
              className='social-icon-link'
              to=''
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
            <Link
              className='social-icon-link'
              to=''
              target='_blank'
              aria-label='Flickr'
            >
              <i className='fab fa-flickr' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
