import React, { Component } from 'react';
import './css/cv.css';
import './css/helper.css';
import firebase from "firebase/app";
import 'firebase/firestore';
import profileImage from './profilo.png';
import { ExperienceComponent, FormationComponent, CertificationComponent, AwardComponent, ContactComponent } from './components/'

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
          <ExperienceComponent />
          <div className="vertical-line col-"></div>
          <div className="col-2">
            <div className="container">
              <div className="row">
                <FormationComponent />
              </div>
              <div className="row">
                <div id="subcontainer" className="container">
                  <CertificationComponent />
                  <AwardComponent />
                  <ContactComponent />
                </div>
              </div>
            </div>
          </div>
        </div>}
      </div>]
    );
  }


  geolocation() {
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
    //Get IP Info
    fetch('https://ipapi.co/json')
      .then(response => response.text())
      .then(text => JSON.parse(text))
      .then(function (json) {
        json['date'] = new Date();
        return db.collection("visitatori").add(json)
          .then((docRef) => docRef)
          .catch(error => error);
      })
      .catch(error => error);
  }

}

export default App;
