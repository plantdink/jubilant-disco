import React from 'react';
import '../App.css'
import Button from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Portfolio</h1>
      <p>Paragraphs will go here</p>
      <div className="hero-btns">
      <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Spec button text</Button>
      <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Spec button text</Button>

      </div>
    </div>
  )
}

export default HeroSection;
