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
          <small className='website-rights'>© Copyright 2021</small>
          <div className='social-icons'>
            <a
              className='social-icon-link'
              href='https://github.com/plantdink'
              target='_blank'
              rel='noreferrer'
              aria-label='GitHub'
            >
              <i className='fab fa-github-square' />
            </a>
            <a
              className='social-icon-link'
              href='https://www.linkedin.com/in/kenlivesey/'
              target='_blank'
              rel='noreferrer'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
            <a
              className='social-icon-link'
              href='https://www.flickr.com/photos/plantdink/'
              target='_blank'
              rel='noreferrer'
              aria-label='Flickr'
            >
              <i className='fab fa-flickr' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
