import React from 'react';
import Button from './Button';
import './Button.css';

class Project extends React.Component {
  render() {
    return(
        <div className="project">
          <img src={this.props.img} />
          <div className="project--body">
            <h2>{this.props.title}</h2>
            <p>{this.props.paragraph}</p>
            <h5>{this.props.tech}</h5>
            </div>

            <div className="project--btns">
              <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
              >
                Code
              </Button>
              <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
              >
                Site
              </Button>
            </div>
        </div>
    );
  }
}

export default Project;
