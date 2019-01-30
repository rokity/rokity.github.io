import React, { Component } from 'react';
import { experience } from './../data'

class ExperienceComponent extends Component {
  render() {
    return experience.map(element => {
      return [<div className="row">
        <h3 className="gray left">{element.period}</h3>
      </div>,
      <div className="row">
        <h3 className="black left">{element.company}</h3>
        <h4 className="gray left">{element.position}<br></br>{element.description}</h4>
      </div>];
    })

  }
}

export default ExperienceComponent
