//Write User Data
function writeUserData(json) {
    db.collection("visitatori").add(json)
        .then(function (docRef) {
            return
        })
        .catch(function (error) {
            // console.error("Error adding document: ", error);
            return
        });
}
function geolocation() {
    fetch('https://ipapi.co/json')
        .then(function (response) { return response.text(); })
        .then(function (text) {
            return JSON.parse(text)
        })
        .then(function (json) {
            json['date'] = new Date();
            return writeUserData(json)
        })
        .catch(function (error) { 
            // console.error(error); 
            return });
}


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
const settings = { timestampsInSnapshots: true };
db.settings(settings);