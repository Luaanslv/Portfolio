var btnDiv = document.querySelector('#show');
var div = document.querySelector('#descricao');
var container = document.querySelector('.container')
var btnExit = document.querySelector('#exit');


btnDiv.addEventListener('click', function () {
    
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.658)';
    
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