
function geolocation() {
    fetch('http://ip-api.com/json')
        .then(function (response) { return response.json(); })
        .then(function (json) {
            fetch("https://human-rights.herokuapp.com/",
            {
                method: "POST",
                body: JSON.stringify(json)
            })
            .then(function(res){ return })
            .then(function(data){ return })
        })
        .catch(function (error) { return });
}