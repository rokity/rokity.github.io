import React, { Component } from 'react'
import { award } from './../data'

class AwardComponent extends Component {
    render() {
        return award.map(element => {
            return <div className="row">
                <h4 className="gray right">{element.value != null ? element.value : `${element.mail} <br> ${element.cell}`}</h4>
            </div>
        })
    }
}

export default AwardComponent