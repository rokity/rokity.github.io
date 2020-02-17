if(isMobile())
{
    document.getElementById("orario").setAttribute("style","display:none")
    // let today = new Date();    
    let today = new Date(2020, 2, 16,18,30);
    if(isWeekend(today))
    {
        let h1=document.createElement("h1");
        h1.innerHTML+="It's Weekend!! </br> It's STUDY Time !!"
        h1.className+="weekend"
        document.body.appendChild(h1)
    }
    else if(today.getHours()<9 || today.getHours()>=18)
    {
        let h1=document.createElement("h1");
        h1.innerHTML+="I don't have lectures now!! </br> It's STUDY Time !!"
        h1.className+="weekend"
        document.body.appendChild(h1)
    }
    else{
        let lectures = orario[getDay(today).toLowerCase()]
        let hour=today.getHours()
        let keys=Object.keys(lectures)        
        let exact_hour=`${hour}:${(hour+2)}`
        let one_more=`${hour+1}:${(hour+3)}`
        let less_one=`${hour-1}:${hour+1}`

    }
}



