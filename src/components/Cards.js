import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <div className='card--container'>
        <div className='cards--wrapper'>
          <ul className='cards--items'>
            <CardItem
              src='https://picsum.photos/250/200'
              altText='This is an image'
              text='Software Engineering projects'
              label='Projects'
              path='/projects'
            />
            <CardItem
              src='https://picsum.photos/250/200'
              altText='This is an image'
              text='Skillset and Technology stack'
              label='Skills'
              path='/skills'
            />
            <CardItem
              src='https://picsum.photos/250/200'
              altText='This is an image'
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
