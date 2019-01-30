import React, { Component } from 'react'

import { formation } from './../data';

class FormationComponent extends Component {
  render() {
    return <div id="formation" className="container">
      <div className="row ">
        <h3 className="black right">EDUCATION</h3>
      </div>
      {formation.map(element => {
        return [<div className="row">
          <h3 className="gray right">{element.period}</h3>
        </div>,
        <div className="row">
          <h3 className="black right">{element.company}</h3>
          <h4 className="gray right">{element.position}<br></br>{element.description}</h4>
        </div>];
      })}
    </div>


  }
}

export default FormationComponent