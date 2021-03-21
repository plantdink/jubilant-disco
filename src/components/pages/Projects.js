import React from 'react';
import '../../App.css';
import Project from '../Project'
import './Projects.css';
import Footer from '../Footer';

function Projects() {
  return(
    <div>
      <div className='projects'>
        <h1>Software projects</h1>
        <div className='project--container'>
          <Project
            img='https://picsum.photos/id/54/300/200'
            title='Tic-Tac-Toe'
            tech='HTML/CSS'
            paragraph='This is the first project completed during my Software Engineering Intensive course.'
          />
        </div>
        <div className='project--container'>
          <Project
            img='https://picsum.photos/id/54/300/200'
            title='Code Snippet Study'
            tech='Ruby on Rails'
            paragraph='This is the second project completed during my Software Engineering Intensive course.'
          />
        </div>
        <div className='project--container'>
          <Project
            img='https://picsum.photos/id/54/300/200'
            title='I Feel Like......'
            tech='React / Ruby on Rails / APIs'
            paragraph='This is the third project completed during my Software Engineering Intensive course.'
          />
        </div>
        <div className='project--container'>
          <Project
            img='https://picsum.photos/id/54/300/200'
            title='Data Viz'
            tech='Ruby on Rails / API'
            paragraph='This is the final project completed during my Software Engineering Intensive course.'
          />
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Projects;
