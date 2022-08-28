import React from 'react';
import Footer from '../Footer';
import HeaderItem from '../HeaderItem';
import './Skills.css'

function Skills() {
  return (
    <>
      <div className="skills">
        <HeaderItem title="Things I know"></HeaderItem>
        <div className="skills--wrapper">
          <div className="skills--container content">
            <h2 className="display">Currently learning</h2>
            <ul className="skills--items">
              <li>
                <i className="devicon-terraform-plain" /> Terraform
              </li>
              <li>
                <i className="devicon-kubernetes-plain" /> Kubernetes
              </li>
            </ul>
            <h2 className="display">Cloud Engineering</h2>
            <ul className="skills--items">
              <li>
                <i className="devicon-python-plain" /> Python
              </li>
              <li>
                <i className="devicon-amazonwebservices-original" /> AWS
              </li>
              <li>
                <i className="devicon-linux-plain" /> Linux
              </li>
              <li>
                <i className="devicon-bash-plain" /> Bash
              </li>
              <li>
                <i className="devicon-vim-plain" /> Vim
              </li>
              <li>
                <i className="devicon-markdown-original" /> Markdown
              </li>
              <li>
                <i className="devicon-docker-plain" /> Docker
              </li>
              <li>
                <i className="devicon-raspberrypi-line" /> Raspberry Pi
              </li>
            </ul>
            <h2 className="display">Software Engineering</h2>
            <ul className="skills--items">
              <li>
                <i className="devicon-javascript-plain" /> JavaScript
              </li>
              <li>
                <i className="devicon-typescript-plain" /> TypeScript
              </li>
              <li>
                <i className="devicon-html5-plain" /> HTML
              </li>
              <li>
                <i className="devicon-css3-plain" /> CSS
              </li>
              <li>
                <i className="devicon-vuejs-plain" /> Vue.js
              </li>
              <li>
                <i className="devicon-nodejs-plain" /> Node.js
              </li>
              <li>
                <i className="devicon-express-original" /> Express
              </li>
              <li>
                <i className="devicon-react-plain" /> React
              </li>
              <li>
                <i className="devicon-nextjs-original-wordmark" /> Next.js
              </li>
              <li>
                <i className="devicon-postgresql-plain" /> PostgreSQL
              </li>
              <li>
                <i className="devicon-mysql-plain" /> MySQL
              </li>
              <li>
                <i className="devicon-mongodb-plain" /> MongoDB
              </li>
              <li>
                <i className="devicon-graphql-plain" /> GraphQL
              </li>
              <li>
                <i className="devicon-mocha-plain" /> Mocha
              </li>
            </ul>
            <h2 className="display">Design and Multimedia</h2>
            <ul className="skills--items">
              <li>
                <i className="devicon-illustrator-plain" /> Illustrator
              </li>
              <li>
                <i className="devicon-photoshop-plain" /> Photoshop
              </li>
              <li>
                <i className="devicon-premierepro-plain" /> Premiere Pro
              </li>
              <li>
                <i className="devicon-aftereffects-plain" /> After Effects
              </li>
              <li>
                <i className="devicon-xd-plain" /> Xd
              </li>
              <li>
                <i className="devicon-figma-plain" /> Figma
              </li>
              <li>
                <i className="devicon-sketch-line" /> Sketch
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Skills;
