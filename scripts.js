function geolocation(){fetch("https://ipapi.co/json").then(function(e){return e.text()}).then(function(e){return JSON.parse(e)}).then(function(e){console.log("aa"),fetch("https://human-rights.herokuapp.com/",{method:"POST",body:JSON.stringify(e)}).then(function(e){}).then(function(e){})}).catch(function(e){console.error(e)})}function renderingContainer(e,o,n){var t=document.getElementById(o);e.forEach(function(e,o,a){var i=document.createElement("div");i.className="row";var r=document.createElement("h3");r.className="gray "+n,r.innerHTML=e.period,i.appendChild(r),t.appendChild(i);var c=document.createElement("div");c.className="row";var d=document.createElement("h3");d.className="black "+n,d.innerHTML=e.company,c.appendChild(d);var l=document.createElement("h4");l.className="gray "+n,l.innerHTML=e.position,l.innerHTML+="</br> "+e.description,c.appendChild(l),t.appendChild(c)})}function renderingSubContainer(e,o){var n=document.getElementById("subcontainer"),t=document.createElement("div");t.className="row";var a=document.createElement("h3");a.className="black right",a.innerHTML=o,t.appendChild(a),n.appendChild(t),e.forEach(function(e,o,t){var a=document.createElement("div");a.className="row";var i=document.createElement("h4");i.className="gray right",e.value?i.innerHTML=e.value:i.innerHTML=e.mail+"</br>"+e.cell,a.appendChild(i),n.appendChild(a)})}window.onload=function(){renderingContainer(experience,"experience","left"),renderingContainer(formation,"formation","right"),renderingSubContainer(certification,"CERTIFICATION"),renderingSubContainer(award,"AWARD"),renderingSubContainer(contact,"CONTACT"),geolocation()};const award=[{value:"First Award at the HackDisabilities 2015"}],certification=[{value:"Course of TDD and Unit Testing with Javascript from DevMarche Community"},{value:"Google Developer Challenge Scholarship 2017 on Udacity like Mobile Web Specialist (November 2017 - February 2018)"}],contact=[{mail:"riccardo.amadio1@gmail.com",cell:"+39 3461871698"}],experience=[{period:"May 2017 - May 2018",company:"Regione Marche",position:"Full Stack Web Developer",description:"In this experience, I developed an application for countability of earthquake. I choose to use Node JS, SQL Server, Polymer for the facility of building microservices and  C.R.U.D. operations.In the meanwhile, I developed some modules for Cohesion, with ASP NET 4, Bootstrap and jQuery."},{period:"May 2016 - Present",company:"MyHomeAgenda",position:"CTO & Co-Founder",description:"In this experience I increased my skills of team working and manager of a team . I created new way of work to increase the production of the team. I actually working with Polymer and NodeJS , but we had some part of the project created with ReactJS . In this project I increase my skills with micro-services and with NoSQL database (MongoDB)."},{period:"November 2015 - May 2016",company:"Freelance",position:"Full Stack Developer",description:"In this experience I created an e-commerce with Prestashop and I implemented an algorithm for payments based on tree structure. I increase my skills about payment system like Skrill and PayPal."},{period:"May 2015 - October 2015",company:"KeyCover",position:"Founder KeyCover",description:"I created the first cover-keyboard designed for blind people. It is a braille keyboard with 8 keys, suitable for any kind of smartphone. I created this board in a Hackathon made by Codemotion for NeoMobile and after we won the competition and after I took part to the Rome Maker Faire with this project."},{period:"January 2015 - September 2015",company:"Unifacile",position:"Junior Full Stack Developer",description:"I grown my skills of Web Developer and I worked to new API for the back-end of the platform with Symfony. I learn Angular for the first time and I created many pages for new feature of the platform. I increased my skills of team working and management."},{period:"May 2014 - February 2015",company:"Elite s.c.p.a.",position:"Android Developer",description:"In this experience I developed an application for domotic house.The objective of this application was to control the TV and show some alert. I learned new skills of Android like the communication from devices and the UI of an application."}],formation=[{period:"September 2009 - June 2014",position:"Computer Science Expert",company:'I.T.I.S. "G.MARCONI" JESI',description:"Obtained the IT Expert degree with 75/100."},{period:"October 2015 - Present",position:"Doctor of Computer Science",company:"University of Camerino",description:"I'm graduating in Computer Science at the University of Camerino."}];