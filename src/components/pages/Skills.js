import React from 'react';
import '../../App.css';
// import CardItem from '../CardItem';
import Footer from '../Footer';
import './Skills.css'

function Skills() {
  return(
    <div className='skills'>
    <h1>Things I know</h1>
      <div className='skills--wrapper'>
        <div className='skills--container'>
          <h1>Currently learning</h1>
            <ul className='skills--items'>
              <li><i className="devicon-python-plain" /> Python</li>
              <li><i className="devicon-amazonwebservices-original" /> AWS</li>
            </ul>
          <h1>Software Development</h1>
            <ul className='skills--items'>
              <li><i className="devicon-ruby-plain" /> Ruby</li>
              <li><i className="devicon-javascript-plain" /> JavaScript</li>
              <li><i className="devicon-html5-plain" /> HTML</li>
              <li><i className="devicon-css3-plain" /> CSS</li>
              <li><i className="devicon-rails-plain" /> Rails</li>
              <li><i className="devicon-vuejs-plain" /> Vue.js</li>
              <li><i className="devicon-nodejs-plain" /> Node.js</li>
              <li><i className="devicon-express-original" /> Express</li>
              <li><i className="devicon-react-plain" /> React</li>
              <li><i className="devicon-git-plain" /> Git</li>
              <li><i className="devicon-postgresql-plain" /> PostgreSQL</li>
            </ul>
          <h1>Multimedia and Design</h1>
            <ul className='skills--items'>
              <li><i className="devicon-aftereffects-plain" /> After Effects</li>
              <li><i className="devicon-illustrator-plain" /> Illustrator</li>
              <li><i className="devicon-photoshop-plain" /> Photoshop</li>
              <li><i className="devicon-premierepro-plain" /> Premiere Pro</li>
              <li><i className="devicon-xd-plain" /> XD</li>
            </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Skills;
