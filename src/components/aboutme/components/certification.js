import React, { Component } from 'react'
import { certification } from './../data'

class CertificationComponent extends Component {
  render() {
    return ([<div className="row">
      <h3 className="black right">CERTIFICATION</h3>
    </div>, certification.map(element => {
      if (element.value != null)
        return <div className="row">
          <h4 className="gray right">{element.value}</h4>
        </div>
      else
        return <div className="row">
          <h4 className="gray right">{element.mail} <br></br> {element.cell}</h4>
        </div>
    })])
  }
}
export default CertificationComponent