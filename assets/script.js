const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
        }
    }
}

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) /3.4);
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
        element.classList.remove(animationClass);
    }
    }) 
}
animeScroll();
if (target.length) {
    window.addEventListener('scroll', function () {
    animeScroll();
})
}
// script menu
const btnMobile = document.querySelector('#btn-Mobile');

function toggleMenu() {
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
