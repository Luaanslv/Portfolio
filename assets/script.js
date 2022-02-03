
var menu = document.getElementById('menu');
var numPx = '300';

window.addEventListener('scroll', function () {
    if (window.scrollY > numPx) {
        menu.classList.remove('onTop');
    } else {
        menu.classList.add('onTop');
    }
});



