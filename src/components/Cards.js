import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import SoftwareImage from '../images/20210323_KSL_5988.jpg';
import SkillsetImage from '../images/20140427_KSL_0374.jpg'
import HistoryImage from '../images/20120418_KSL_3766.jpg';

function Cards() {
  return (
    <div className='cards'>
      <div className='card--container'>
        <div className='cards--wrapper'>
          <ul className='cards--items'>
            <CardItem
              src={ SoftwareImage }
              altText='This is an image'
              text='Software projects'
              path='/projects'
            />
            <CardItem
              src={ SkillsetImage }
              altText='This is an image'
              text='Skillset'
              path='/skills'
            />
            <CardItem
              src={ HistoryImage }
              altText='This is an image'
              text='Work History'
              path='/history'
            />
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Cards;
