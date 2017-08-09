window.onload = function() {
     renderingContainer((experience),"experience","left");   
     renderingContainer((formation),"formation","right");   
     renderingSubContainer((certification),"CERTIFICATION");      
     renderingSubContainer((award),"AWARD");   
     renderingSubContainer((contact),"CONTACT");                   
    
};

function renderingContainer(data,section,orientation)
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

function renderingSubContainer(data,section)
{
    var subcontainer = document.getElementById("subcontainer");
    var title_row = document.createElement("div");
    title_row.className="row";
    var title = document.createElement("h3");
    title.className = "black right";
    title.innerHTML = section;
    title_row.appendChild(title);
    subcontainer.appendChild(title_row);

    data.forEach(function(element,index,array)  
    {
        var content_row = document.createElement("div");
        content_row.className = "row";
        var content = document.createElement("h4");
        content.className = "gray right";
        if(element.value)
            content.innerHTML = element.value;
        else 
            content.innerHTML = element.mail+ "</br>" + element.cell;        
        content_row.appendChild(content);
        subcontainer.appendChild(content_row);

    });
}

