import React from 'react';
import Button from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Sign up for the newsletter of my life. Coming soon.
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your email address'
            />
            <Button buttonStyle='btn--outline'>Sign up</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Me</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/sign-up'>Testimonials</Link>
            <Link to='/sign-up'>Testimonials</Link>
          </div>
          <div className="footer-link-items">
            <h2>About Me</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/sign-up'>Testimonials</Link>
            <Link to='/sign-up'>Testimonials</Link>
          </div>
        </div>
      </div>
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
