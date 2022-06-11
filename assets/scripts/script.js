var btnAbout = document.querySelector('#show');
var divAbout = document.querySelector('#descricao');
var btnExitAbout = document.querySelector('#exit-sobre');
var divSKills = document.querySelector('#skills');
var btnSkills = document.querySelector('#urano');
var btnExitSkills = document.querySelector('#exitSkills');
var btnProjects = document.querySelector('#btnPlanet');
var btnExitProjects = document.querySelector('#exitProjects');
var divProjects = document.querySelector('#divProjects');
var divInfoProject = document.querySelector('#infoProjetctNetflix');
// var btnProjectNetflix = document.querySelector('#btnNetflix');
var divContact = document.querySelector('#divContact');
var btnContact = document.querySelector('#showContact');
var btnExitContact = document.querySelector('#exitContact');
var btnVeja = document.querySelector('#btnVeja');
var alerta = document.querySelector('#alert');
var visibilidade = false;




showAbout();
backgroundAbout();
exitAbout();
showSkills();
backgroundSkills();
exitSKills();
showProjects();
backgroundProjects();
showMoreOrLess()
exitProjects();
showContact();
backgroundContact();
exitContact();



function showAbout() {
    btnAbout.addEventListener('click', function () {
        if (divAbout.style.display === "none") {
            divAbout.style.display = "block";
        }
        divAbout.style.display = "block";
    });
}

function backgroundAbout() {
    btnAbout.addEventListener('click', function () {
        divAbout.style.backgroundColor = 'rgba(0, 0, 0, 0.800)'

    })
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

function backgroundSkills() {
    btnSkills.addEventListener('click', function () {
        divSKills.style.backgroundColor = 'rgba(0, 0, 0, 0.800)';
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

function backgroundProjects() {
    btnProjects.addEventListener('click', function () {
        divProjects.style.background = 'rgba(0, 0, 0, 0.800)';
    })
}

function exitProjects() {
    btnExitProjects.addEventListener('click', function () {
        if (divProjects.style.display === 'block') divProjects.style.display = 'none';
    })
}

function showMoreOrLess() {
    btnVeja.addEventListener('click', function () {
        if (visibilidade) {
            alerta.innerHTML = ''
            btnVeja.innerHTML = 'Veja Mais'
            visibilidade = false;
        }
        else {
            alerta.innerHTML = ' Espere um pouco estou construindo mais sites!'
            btnVeja.innerHTML = 'Veja Menos'
            visibilidade = true;
        }

       
    })

}

// function showInfoNetflix() {
//     btnProjectNetflix.addEventListener('click', function () {
//         if (divInfoProject.style.display === 'none') {
//             divInfoProject.style.display = 'block';
//         } else {
//             divInfoProject.style.display = 'block';
//         }

//     })
// }



function showContact() {
    btnContact.addEventListener('click', function () {
        if (divContact.style.display === 'none') {
            divContact.style.display = 'block';
        } else {
            divContact.style.display = 'block';
        }
    })
}

function backgroundContact() {
    btnContact.addEventListener('click', function () {
        divContact.style.backgroundColor = 'rgba(0, 0, 0, 0.800)';
    })
}

function exitContact() {
    btnExitContact.addEventListener('click', function () {
        if (divContact.style.display === 'block') divContact.style.display = 'none';
    })
}
