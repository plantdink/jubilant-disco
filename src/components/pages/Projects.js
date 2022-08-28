import React from 'react';
import Project from '../Project'
import './Projects.css';
import Footer from '../Footer';
import IFeelLike from '../../images/20210322-IFeelLike.png';
import AgentFieldManual from '../../images/20220828-AgentFieldManual.png';
import CloudResume from '../../images/20220828-CloudResume.png';
import HeaderItem from '../HeaderItem';

function Projects() {
  return (
    <>
      <HeaderItem title="Software Development Projects"></HeaderItem>
      <div className="projects">
        <div className="projects--container">
          <ul className="projects--items">
            <Project
              img={AgentFieldManual}
              altText="This is a purely decorative image"
              title="Agent Field Manual"
              tech="React | GraphQl | Docker | Raspberry Pi"
              paragraph="A site developed to provide players with an encyclopedia of items and information. Deployed onto a Raspberry Pi using a Docker container fetching data from a MongoDB database. API"
              gitLink="https://github.com/plantdink/fuzzy-goggles"
              siteLink="https://www.agent-field-manual.com"
            />
            <Project
              img={CloudResume}
              altText="This is a purely decorative image"
              title="Cloud Resume Project"
              tech="AWS | S3/Lambda | GitHub CI/CD | HTML/CSS"
              paragraph="This site was developed as part of the Cloud Resume Challenge. It is a static site hosted on AWS & demonstrates cloud engineering as well as CI/CD skills."
              gitLink="https://github.com/plantdink/cloud_resume"
              siteLink="https://www.kenlivesey.com"
            />
            <Project
              img={IFeelLike}
              altText="This is a purely decorative image"
              title="I Feel Like......"
              tech="React | Ruby on Rails | PostgreSQL | API"
              paragraph="This site aims to help you when you are not sure where to eat, or you do not know what to eat. It combines a Ruby on Rails API backend with a React front end."
              gitLink="https://github.com/plantdink/ubiquitous-robot"
              siteLink="https://anchorite1001.github.io/project2-frontend/"
            />
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
