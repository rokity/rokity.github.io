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
  //Write User Data
  function writeUserData(json) {
    db.collection("visitatori").add(json)
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }
function geolocation() {
    fetch('https://ipapi.co/json')
        .then(function (response) { return response.text(); })
        .then(function (text) {
            return JSON.parse(text)
        })
        .then(function(json){
            console.log("aa")
            return writeUserData(json)
        })
        .catch(function (error) { console.error(error);return });
}

