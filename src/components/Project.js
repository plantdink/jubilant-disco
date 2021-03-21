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
      />
      <div className='project--body'>
        <h2>{ props.title }</h2>
        <p>{ props.paragraph }</p>
        <h5>{ props.tech }</h5>
      </div>
      <div className='project--btns'>
        <Link to={ props.gitLink }>
          <button className='btn btn--outline btn--large'>
            Code
          </button>
        </Link>
        <Link to={ props.siteLink }>
          <button className='btn btn--outline btn--large'>
            Site
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Project;
