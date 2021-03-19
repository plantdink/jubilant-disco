import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Contact.css';

function Contact() {
  return(
    <div>
      <div className='contact'>
        <h1>Preferred methods of contact</h1>
        <div className='contact--details--container'>
          <div className='contact--wrapper'>
            <h3>kenlivesey10 at gmail.com</h3>
          </div>
          <div className='contact--wrapper'>
            <a href="https://www.linkedin.com/in/kenlivesey/">Click here for my LinkedIn profile</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Contact;
