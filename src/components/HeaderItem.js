import React from 'react';
import './PageHeader.css';

function PageHeader(props){
  return(
    <div className='header--container'>
      <h1 className='header--item'>
        {props.title}
      </h1>
    </div>
  );
}

export default PageHeader;
