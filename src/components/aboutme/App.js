import React, { Component } from 'react';
import './css/cv.css';
import './css/helper.css';
import firebase from "firebase/app";
import 'firebase/firestore';
import profileImage from './profilo.png';
import { award, certification, contact, experience, formation } from './data/';
// Initialize Firebase
const config = {
  apiKey: "AIzaSyB7IA52cFpYfyQ4hYc3CU_XsFRwgkMHaCg",
  authDomain: "visitors-aeb4b.firebaseapp.com",
  databaseURL: "https://visitors-aeb4b.firebaseio.com",
  projectId: "visitors-aeb4b",
  storageBucket: "visitors-aeb4b.appspot.com",
  messagingSenderId: "37669232163"
};
firebase.initializeApp(config);
var db = firebase.firestore();


class App extends Component {

  render() {
    this.geolocation();
    return (
      [<div className="center title-container">
        <h1 className="title black">RICCARDO AMADIO</h1>
      </div>,
      <div className="center">
        <h3 className="gray">Full-Stack Developer</h3>
      </div>,
      <div className=" center">
        <img id="img" className="profile-picture" src={profileImage} alt="Riccardo Amadio" />
      </div>,
      <div className="center container">
        {<div className="row h">
          <div className="col-3">
            <div id="experience" className="container">
              <div className="row">
                <h3 className="black left">EXPERIENCE</h3>
              </div>
              {
                experience.map(element => {
                  return [<div className="row">
                    <h3 className="gray left">{element.period}</h3>
                  </div>,
                  <div className="row">
                    <h3 className="black left">{element.company}</h3>
                    <h4 className="gray left">{element.position}<br></br>{element.description}</h4>
                  </div>];
                })
              }
            </div>
          </div>
          <div className="vertical-line col-"></div>
          <div className="col-2">
            <div className="container">
              <div className="row">
                <div id="formation" className="container">
                  <div className="row ">
                    <h3 className="black right">EDUCATION</h3>
                  </div>
                  {
                    formation.map(element => {
                      return [<div className="row">
                        <h3 className="gray right">{element.period}</h3>
                      </div>,
                      <div className="row">
                        <h3 className="black right">{element.company}</h3>
                        <h4 className="gray right">{element.position}<br></br>{element.description}</h4>
                      </div>];
                    })
                  }
                </div>
              </div>
              <div className="row">
                <div id="subcontainer" className="container">
                  <div className="row">
                    <h3 className="black right">CERTIFICATION</h3>
                  </div>
                  {
                    certification.map(element => {
                      return (<div className="row">
                        <h4 className="gray right">{element.value != null ? element.value : `${element.mail} <br> ${element.cell}`}</h4>
                      </div>)
                    })
                  }
                  <div className="row">
                    <h3 className="black right">AWARD</h3>
                  </div>
                  {award.map(element => {
                    return (<div className="row">
                      <h4 className="gray right">{element.value != null ? element.value : `${element.mail} <br> ${element.cell}`}</h4>
                    </div>)
                  })}
                  <div className="row">
                    <h3 className="black right">CONTACT</h3>
                  </div>
                  {contact.map(element => {
                    if (element.value != null)
                      return (<div className="row">
                        <h4 className="gray right">{element.value}</h4>
                      </div>)
                    else
                      return (<div className="row">
                        <h4 className="gray right">{element.mail} <br></br> {element.cell}</h4>
                      </div>)
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>}
      </div>]
    );
  }
  geolocation() {
    fetch('https://ipapi.co/json')
      .then(response => response.text())
      .then(text => JSON.parse(text))
      .then(function (json) {
        json['date'] = new Date();
        return db.collection("visitatori").add(json)
          .then((docRef) => docRef)
          .catch( error => error);
      })
      .catch( error => error);
  }

}

export default App;
