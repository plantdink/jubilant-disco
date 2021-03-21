import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

function Button (props) {
  return (
    <>
      <Link
        to={props.gitLink}
        className='btn-mobile'
      >
        <button>
          Code
        </button>
      </Link>
      <Link
        to={props.siteLink }
        className='btn-mobile'
      >
        <button>
          Site
        </button>
      </Link>
    </>
  );
};

export default Button;
