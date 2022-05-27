var btnAbout = document.querySelector('#show');
var divAbout = document.querySelector('#descricao');
var btnExitAbout = document.querySelector('#exit-sobre');
var divSKills = document.querySelector('#skills');
var btnSkills = document.querySelector('#urano');
var btnExitSkills = document.querySelector('#exitSkills');
var btnProjects = document.querySelector('#btnPlanet');
var btnExitProjects = document.querySelector('#exitProjects');
var divProjects = document.querySelector('#divProjects');
var divContact = document.querySelector('#divContact');
var btnContact = document.querySelector('#showContact');
var btnExitContact = document.querySelector('#exitContact');

showAbout();
exitAbout();
showSkills();
exitSKills();
showProjects();
exitProjects();
showContact();
exitContact();


function showAbout() {
    btnAbout.addEventListener('click', function () {
        if (divAbout.style.display === "none") {
            divAbout.style.display = "block";
        }
           divAbout.style.display = "block";
    });
}


function exitAbout() {
    btnExitAbout.addEventListener('click', function () {
        if (divAbout.style.display === "block") divAbout.style.display = "none";
    })
}

function showSkills() {
    btnSkills.addEventListener('click', function () {

        if (divSKills.style.display === "none") {
            divSKills.style.display = "block";
        }
            divSKills.style.display = "block";
    })
}

function exitSKills() {
    btnExitSkills.addEventListener('click', function () {
        if (divSKills.style.display === "block") divSKills.style.display = "none";   
    })
}


function showProjects() {
    btnProjects.addEventListener('click', function () {

        if (divProjects.style.display === "none") {
            divProjects.style.display = "block";
        }
            divProjects.style.display = "block";

    })
}

function exitProjects() {
    btnExitProjects.addEventListener('click', function () {
        if (divProjects.style.display === 'block') divProjects.style.display = 'none';
    })
}

function showContact() {
    btnContact.addEventListener('click', function () {
        if (divContact.style.display === 'none') {
            divContact.style.display = 'block';
        }
        else {
            divContact.style.display = 'block';
        }
    })
}
function exitContact(){
    btnExitContact.addEventListener('click', function () {
        if (divContact.style.display === 'block') divContact.style.display = 'none';
    })
}