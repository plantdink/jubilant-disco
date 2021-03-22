import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
import './pages/Projects.css';

function Project (props) {
  return(
    <div className='project'>
      <img
        src={ props.img }
        alt={ props.altText }
        className='project--image'
      />
      <div className='project--body'>
        <h2>{ props.title }</h2>
        <p>{ props.paragraph }</p>
      </div>
      <div className='project--tech'>
        <h5>{ props.tech }</h5>
      </div>
      <div className='project--btns'>
          <a
            href={ props.gitLink }
            className='btn btn--primary btn--large'
            target='_blank'
          >
            See the Code
          </a>
          <a
            href={ props.siteLink }
            className='btn btn--primary btn--large'
            target='_blank'
          >
            Visit the Site
          </a>
      </div>
    </div>
  );
}

export default Project;
