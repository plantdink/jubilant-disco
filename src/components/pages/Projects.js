import React from 'react';
import Project from '../Project'
import './Projects.css';
import Footer from '../Footer';
import CodeSnippetStudy from '../../images/20210322-CodeSnippetStudy.png';
import IFeelLike from '../../images/20210322-IFeelLike.png';
import DataViz from '../../images/20210322-DataViz.png';
import HeaderItem from '../HeaderItem';

function Projects() {
  return(
    <>
      <HeaderItem
        title='Software Development Projects'
      >
      </HeaderItem>
      <div className='projects'>
        <div className='projects--container'>
            <ul className='projects--items'>
              <Project
                img={ CodeSnippetStudy }
                altText='This is a purely decorative image'
                title='Code Snippet Study'
                tech='Ruby on Rails / PostgreSQL / Bootstrap'
                paragraph='This site is designed to allow people who are new to coding to save small snippets of code. Other site members can add comments to each snippet.'
                gitLink='https://github.com/plantdink/project01'
                siteLink='https://calm-tundra-99309.herokuapp.com/'
              />
              <Project
                img={ IFeelLike }
                altText='This is a purely decorative image'
                title='I Feel Like......'
                tech='React / Ruby on Rails / PostgreSQL / API'
                paragraph='This site aims to help you when you are not sure where to eat, or you do not know what to eat. It combines a Ruby on Rails API backend with a React front end.'
                gitLink='https://github.com/plantdink/ubiquitous-robot'
                siteLink='https://anchorite1001.github.io/project2-frontend/'
              />
              <Project
                img={ DataViz }
                altText='This is a purely decorative image'
                title='LGA Data Viz'
                tech='Ruby on Rails / PostgreSQL / Bootstrap'
                paragraph='This site aims to help people easily find, and compare, data from various levels of Australian Government. At present it only has a small selection of ABS statistics and Victorian Government Gambling revenue data available.'
                gitLink='https://github.com/plantdink/project03'
                siteLink='https://guarded-bayou-72393.herokuapp.com/'
              />
            </ul>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default Projects;
