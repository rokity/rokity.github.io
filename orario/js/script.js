let days=Object.keys(orario);
let ore=["9:11","11:13","14:16","16:18"]
for(let i=0;i<4;i++)
{
    let tr = document.createElement("tr");
    days.forEach(day=>{
        let td=document.createElement("td");
        if(i==3 && day=="friday")
            td.className+="tdrightleast"
        else if(day=="friday" && i!=3)
            td.className+="tdright"
        else if(i==3 && day!="friday")
            td.className+="tdleast"
        
        let materia=orario[day][ore[i]]
        if(Object.keys(materia).length==0)
            td.innerHTML=" "
        else        
            td.innerHTML=materia["long_name"]+"</br>"+materia["room"]
        tr.appendChild(td);
    })
    document.getElementById("orario").appendChild(tr);
}