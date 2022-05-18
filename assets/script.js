var btnDiv = document.querySelector('#show');
var div = document.querySelector('#descricao');
var container = document.querySelector('.container')
var btnExit = document.querySelector('#exit-sobre');
var divSKills = document.querySelector('#skills');
var btnUrano = document.querySelector('#urano');
var btnExitSkills = document.querySelector('#exitSkills')

btnDiv.addEventListener('click', function () {
    
    if (div.style.display === "block") {
        div.style.display = "none";
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

    if (divSKills.style.opacity === "block") {
        divSKills.style.display = "none";
    } else {
        divSKills.style.display = "block";
    }
})

btnExitSkills.addEventListener('click', function () {
    if (divSKills.style.display === "block") {
        divSKills.style.display = "none"
    }
})