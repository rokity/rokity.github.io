window.onload = () => {

     rendering((experience),"experience","left");   
     rendering((formation),"formation","right");   
             
                        
            

    
};

function rendering(data,section,orientation)
{   
    var container = document.getElementById(section);
    data.forEach(function(element,i,array) {
        var period_div = document.createElement("div");
            period_div.className = "row";
        var period_h3 = document.createElement("h3");
            period_h3.className = "gray "+orientation;
            period_h3.innerHTML=element.period;
        period_div.appendChild(period_h3);
        container.appendChild(period_div);

        var core_div = document.createElement("div");
            core_div.className = "row";
        var company_h3 = document.createElement("h3");
            company_h3.className = "black "+orientation;;
            company_h3.innerHTML = element.company;
        core_div.appendChild(company_h3);

        var rule_desc_h4 = document.createElement("h4");
            rule_desc_h4.className = "gray "+orientation;;
            rule_desc_h4.innerHTML = element.position;
            rule_desc_h4.innerHTML += "</br> "+element.description;
        core_div.appendChild(rule_desc_h4);
        container.appendChild(core_div);
    });
}

