import React from 'react';
import '../../App.css';
import Project from '../Project'
import './Projects.css';
import Footer from '../Footer';
import TicTacToe from '../../images/20210322-TicTacToe.png';
import CodeSnippetStudy from '../../images/20210322-CodeSnippetStudy.png';
import IFeelLike from '../../images/20210322-IFeelLike.png';
import DataViz from '../../images/20210322-DataViz.png';

function Projects() {
  return(
    <div>
      <div className='projects'>
        <h1>Software projects</h1>
        <div className='projects--container'>
          <div className='projects--wrapper'>
            <ul className='projects--items'>
              <Project
                img={TicTacToe}
                altText='This is a purely decorative image'
                title='Tic-Tac-Toe'
                tech='HTML/CSS'
                paragraph='This is the first project completed during my Software Engineering Intensive course. It is an in-browser 2 player game of Tic-Tac-Toe, with a page of related trivia facts.'
                gitLink='https://github.com/plantdink/project0'
                siteLink='https://plantdink.github.io/project0/'
              />
              <Project
                img={CodeSnippetStudy}
                altText='This is a purely decorative image'
                title='Code Snippet Study'
                tech='Ruby on Rails / Bootstrap'
                paragraph='This site is designed to allow people who are new to coding to save small snippets of code. Other site members can add comments to each snippet.'
                gitLink='https://github.com/plantdink/project01'
                siteLink='https://calm-tundra-99309.herokuapp.com/'
              />
              <Project
                img={IFeelLike}
                altText='This is a purely decorative image'
                title='I Feel Like......'
                tech='React / Ruby on Rails / API'
                paragraph='This site aims to help you when you are not sure where to eat, or you do not know what to eat. It combines a Ruby on Rails API backend with a React front end.'
                gitLink='https://github.com/plantdink/ubiquitous-robot'
                siteLink='https://anchorite1001.github.io/project2-frontend/'
              />
              <Project
                img={DataViz}
                altText='This is a purely decorative image'
                title='LGA Data Viz'
                tech='Ruby on Rails / API'
                paragraph='This site aims to help people easily find, and compare, data from various levels of Australian Government. At present it only has a small selection of ABS statistics and Victorian Government Gambling revenue data available.'
                gitLink='https://github.com/plantdink/project03'
                siteLink='https://guarded-bayou-72393.herokuapp.com/'
              />
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Projects;
