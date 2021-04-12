import React from 'react';
import './History.css';
import Footer from '../Footer';
import HeaderItem from '../HeaderItem';

function History() {
  return(
    <>
    <HeaderItem
      title='A little about me'
    >
    </HeaderItem>
    <div className='history--container'>
      <div className='history--wrapper'>
        <div className='content'>
          <h2 className='history--text'>
            Employment
          </h2>
          <h2 className='display'>
            Digital & Design Coordinator
          </h2>
          <h3 className='history--text display'>
            Victorian Government | April 2016 - November 2020
          </h3>
          <p className='history--text'>
            Collaborated with multiple key stakeholders and product owners to audit over 170 paper-based application kits and forms and create fully accessible interactive versions.
          </p>
          <h2 className='display'>
            Multimedia Production Officer
          </h2>
          <h3 className='history--text display'>
            Victoria Police | February 2015 - April 2016
          </h3>
          <p className='history--text'>
            Worked in cross-functional teams to produce multimedia training packages. By allowing better separation between theory and practical lessons each package returned, on average, 10hrs to active policing per officer.
          </p>
          <h2 className='display'>
            Freelancer - Video/ Photography
          </h2>
          <h3 className='history--text display'>
            Self-Employed | July 2014 - February 2015
          </h3>
          <p className='history--text'>
            Successfully developed a repeat customer base by providing a high quality aerial video and still photography product for use in sporting broadcasts along with general event photography.
          </p>
          <h2 className='display'>
            Multimedia Technician
          </h2>
          <h3 className='history--text display'>
            Australian Army | February 1994 - July 2014
          </h3>
          <p className='history--text'>
            Researched, developed and implemented a digital asset management system for hand-held imagery. Deployed to Afghanistan to implement the system into active military special operations which resulted in a database that is still in active use over 10 years later.
          </p>
        </div>
      </div>
      <div className='history--wrapper'>
        <div className='content'>
          <h2 className='history--text'>
            Education
          </h2>
          <h2 className='display'>
            Software Engineering Immersive
          </h2>
          <h3 className='history--text display'>
            General Assembly | December 2020 - March 2021
          </h3>
          <h2 className='display'>
            User Experience Design
          </h2>
          <h3 className='history--text display'>
            General Assembly | November 2019
          </h3>
        </div>
      </div>
      <div className='history--wrapper'>
        <div className='content'>
          <h2 className='history--text'>
           Qualifications
          </h2>
          <h2 className='display'>
            Certificate 3 Printing and Graphic Arts (Multimedia)
          </h2>
          <h3 className='history--text display'>
            Canberra Institute of Technology 2005
          </h3>
          <h2 className='display'>
            Certificate IV Assessment and Workplace Training
          </h2>
          <h3 className='history--text display'>
            Headquarters Training Command - Army 2004
          </h3>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
};

export default History;
