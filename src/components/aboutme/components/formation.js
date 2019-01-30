import React, { Component } from 'react'

import { formation } from './../data';

class FormationComponent extends Component {
  render() {
    return formation.map(element => {
      return [<div className="row">
        <h3 className="gray right">{element.period}</h3>
      </div>,
      <div className="row">
        <h3 className="black right">{element.company}</h3>
        <h4 className="gray right">{element.position}<br></br>{element.description}</h4>
      </div>];
    })

  }
}

export default FormationComponent