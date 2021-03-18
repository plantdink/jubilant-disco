import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Projects</h1>
      <div className="card--container">
        <div className="cards--wrapper">
          <ul className="cards--items">
            <CardItem src='' text='This is things I have made' label='Projects' path='/projects' />
            <CardItem src='' text='This is things I know' label='Skills' path='/skills' />
            <CardItem src='' text='This is where I have been' label='History' path='/history' />
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Cards;
