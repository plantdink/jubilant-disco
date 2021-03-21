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
            altText='This an image'
            title='Tic-Tac-Toe'
            tech='HTML/CSS'
            paragraph='This is the first project completed during my Software Engineering Intensive course.'
            gitLink='https://github.com/plantdink/project0'
            siteLink='https://plantdink.github.io/project0/'
          />
        </div>
        <div className='project--container'>
          <Project
            img='https://picsum.photos/id/54/300/200'
            altText='This an image'
            title='Code Snippet Study'
            tech='Ruby on Rails'
            paragraph='This is the second project completed during my Software Engineering Intensive course.'
            gitLink='https://github.com/plantdink/project01'
            siteLink='https://calm-tundra-99309.herokuapp.com/'
          />
        </div>
        <div className='project--container'>
          <Project
            img='https://picsum.photos/id/54/300/200'
            altText='This an image'
            title='I Feel Like......'
            tech='React / Ruby on Rails / APIs'
            paragraph='This is the third project completed during my Software Engineering Intensive course.'
            gitLink='https://github.com/plantdink/ubiquitous-robot'
            siteLink='https://anchorite1001.github.io/project2-frontend/'
          />
        </div>
        <div className='project--container'>
          <Project
            img='https://picsum.photos/id/54/300/200'
            altText='This an image'
            title='Data Viz'
            tech='Ruby on Rails / API'
            paragraph='This is the final project completed during my Software Engineering Intensive course.'
            gitLink='https://github.com/plantdink/project03'
            siteLink=''
          />
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Projects;
