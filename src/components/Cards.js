import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>About me</h1>
      <div className='card--container'>
        <div className='cards--wrapper'>
          <ul className='cards--items'>
            <CardItem
              src=''
              text='Software Engineering projects'
              label='Projects'
              path='/projects'
            />
            <CardItem
              src=''
              text='Skillset and Technology stack'
              label='Skills'
              path='/skills'
            />
            <CardItem
              src=''
              text='Education and Work History'
              label='History'
              path='/history'
            />
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Cards;
