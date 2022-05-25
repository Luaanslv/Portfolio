var btnDiv = document.querySelector('#show');
var div = document.querySelector('#descricao');
var btnExit = document.querySelector('#exit-sobre');
var divSKills = document.querySelector('#skills');
var btnUrano = document.querySelector('#urano');
var btnExitSkills = document.querySelector('#exitSkills');
var btnPlanet = document.querySelector('#btnPlanet');
var btnExitProjects = document.querySelector('#exitProjects');
var divProjects = document.querySelector('#divProjects');

btnDiv.addEventListener('click', function () {

    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "block";
    }

})

btnExit.addEventListener('click', function () {
    if (div.style.display === "block") {
        div.style.display = "none"
    }
})

btnUrano.addEventListener('click', function () {

    if (divSKills.style.display === "none") {
        divSKills.style.display = "block";
    } else {
        divSKills.style.display = "block";
    }
})

btnExitSkills.addEventListener('click', function () {
    if (divSKills.style.display === "block") {
        divSKills.style.display = "none"
    }
})

btnPlanet.addEventListener('click', function () {

    if (divProjects.style.display === "none") {
        divProjects.style.display = "block";
    } else {
        divProjects.style.display = "block";
    }

})
btnExitProjects.addEventListener('click', function () {
    if (divProjects.style.display === "block") {
        divProjects.style.display = "none";
    }
})