
function geolocation() {
    fetch('https://ipapi.co/json')
        .then(function (response) { return response.text(); })
        .then(function (text) {
            return JSON.parse(text)
        })
        .then(function(json){
            console.log("aa")
            fetch("https://human-rights.herokuapp.com/",
            {
                method: "POST",
                body: JSON.stringify(json)
            })
            .then(function(res){ return })
            .then(function(data){ return })
        })
        .catch(function (error) { console.error(error);return });
}