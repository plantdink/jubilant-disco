import React from 'react';
import Footer from '../Footer';
import HeaderItem from '../HeaderItem';
import './Contact.css';

function Contact() {
  return(
    <>
    <HeaderItem title='Preferred contact methods'
    >
    </HeaderItem>
      <div className='contact'>
        <div className='contact--details--container'>
          <div className='contact--wrapper'>
            <h2>kenlivesey10 at gmail.com</h2>
          </div>
          <div className='contact--wrapper'>
            <a href="https://www.linkedin.com/in/kenlivesey/">Click here for my LinkedIn profile</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default Contact;
