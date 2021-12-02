//manu aparece 
var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function () {
    var sidebar = document.querySelector(".container").classList.toggle("show-menu")
});

//menu esconde
const menu = document.querySelector(".menu");

menu.addEventListener("click", function () {
     var sidebar = document.querySelector(".container").classList.toggle("show-menu")
})



