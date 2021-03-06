let scroll = window.requestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000/60);
}

let elements = document.querySelectorAll('.show-on-scroll');
function loop () {
    elements.forEach(function(element) {
        if (isElementInViewpoint(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
}

loop();

function isElementInViewpoint(el) {
    let rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0 || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)))
    );
}

const nav = document.querySelector('nav');

window.onscroll = function() {
    if (!nav.classList.contains('bgcolor')) {
        nav.classList.add('bgcolor');
    };

    if (window.scrollY == 0 && nav.classList.contains('bgcolor')) {
        nav.classList.remove('bgcolor');
    };
}
