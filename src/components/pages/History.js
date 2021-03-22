import React from 'react';
import '../../App.css';
import './History.css';
import Footer from '../Footer';

function History() {
  return(
    <div>
    <h1>History</h1>
    <div className='history--container'>
      <div className='history--wrapper'>
        <div className='history--content'>
          <h1>
            Employment
          </h1>
          <h2 className='history--text'>
            Digital & Design Coordinator
          </h2>
          <h3 className='history--text'>
            Victorian Government | April 2016 - November 2020
          </h3>
          <p className='history--text'>
            Collaborated with multiple key stakeholders and product owners to audit over 170 paper-based application kits and forms and create fully accessible interactive versions.
          </p>
          <h2 className='history--text'>
            Multimedia Production Officer
          </h2>
          <h3 className='history--text'>
            Victoria Police | February 2015 - April 2016
          </h3>
          <p className='history--text'>
            Worked in cross-functional teams to produce multimedia training packages. By allowing better separation between theory and practical lessons each package returned, on average, 10hrs to active policing per officer.
          </p>
          <h2 className='history--text'>
            Multimedia Technician
          </h2>
          <h3 className='history--text'>
            Australian Army | February 1994 - July 2014
          </h3>
          <p className='history--text'>
            Researched, developed and implemented a digital asset management system for hand-held imagery. Deployed to Afghanistan to implement the system into active military special operations which resulted in a database that is still in active use over 10 years later.
          </p>
        </div>
      </div>
      <div className='history--wrapper'>
        <div className="history--content">
          <h1>
            Education
          </h1>
          <h2 className='history--text'>
            Software Engineering Immersive
          </h2>
          <h3 className='history--text'>
            General Assembly | December 2020 - March 2021
          </h3>
          <h2 className='history--text'>
            User Experience Design
          </h2>
          <h3 className='history--text'>
            General Assembly | November 2019
          </h3>
        </div>
      </div>
      <div className='history--wrapper'>
        <div className="history--content">
          <h1>
           Qualifications
          </h1>
          <h2 className='history--text'>
            Certificate 3 Printing and Graphic Arts (Multimedia)
          </h2>
          <h3 className='history--text'>
            Canberra Institue of Technology 2005
          </h3>
          <h2 className='history--text'>
            Certificate IV Assessment and Workplace Training
          </h2>
          <h3 className='history--text'>
            Headquarters Training Command - Army 2004
          </h3>
        </div>
      </div>
    </div>

      <Footer />
    </div>
  )
};

export default History;
