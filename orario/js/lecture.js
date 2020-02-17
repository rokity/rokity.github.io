if (isMobile()) {
    document.getElementById("orario").setAttribute("style", "display:none")
    let today = new Date();
    // let today = new Date(2020, 2, 16,18,30);
    if (isWeekend(today)) {
        let h1 = document.createElement("h1");
        h1.innerHTML += "It's Weekend!! </br> It's STUDY Time !!"
        h1.className += "weekend"
        document.body.appendChild(h1)
    }
    else if (today.getHours() < 9 || today.getHours() >= 18 || today.getHours == 13) {
        noLectures();
    }
    else {
        let lectures = orario[getDay(today).toLowerCase()]
        let hour = today.getHours()
        let keys = Object.keys(lectures)
        let exact_hour = `${hour}:${(hour + 2)}`
        let one_more = `${hour + 1}:${(hour + 3)}`
        let less_one = `${hour - 1}:${hour + 1}`
        let index = -1;
        if (keys.indexOf(exact_hour) != -1)
            index = (exact_hour)
        if (keys.indexOf(one_more) != -1)
            index = (one_more)
        if (keys.indexOf(less_one) != -1)
            index = (less_one)
        console.log(lectures[index].length)
        if (index == -1 || Object.keys(lectures[index]).length==0)
            noLectures()
        else {
            let h1 = document.createElement("h1");
            h1.innerHTML += lectures[index]["long_name"] + "</br>" + lectures[index]["room"]
            h1.className += "weekend"
            document.body.appendChild(h1)
        }
    }
}



