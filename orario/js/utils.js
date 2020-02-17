
//Style Column Table Orario
let styleColumn = (index, day, column) => {
    if (index == 3 && day == "friday")
        column.className += "tdrightleast"
    else if (day == "friday" && index != 3)
        column.className += "tdright"
    else if (index == 3 && day != "friday")
        column.className += "tdleast"
    return column
}



//Detect Browser
let isMobile = () => {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
        return true
    } else {
        return false
    }
}

//Check which day is now
let isWeekend = (date) => {
    var dayName = getDay(date)
    return (dayName == "Sunday" || dayName == "Saturday") ? true : false;
}

let getDay = (date) => {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}


let noLectures = () => {
    let h1 = document.createElement("h1");
    h1.innerHTML += "I don't have lectures now!! </br> It's STUDY Time !!"
    h1.className += "weekend"
    document.body.appendChild(h1)
}