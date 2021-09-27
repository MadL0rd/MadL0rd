// This is where it all goes :)

// 
document.addEventListener('DOMContentLoaded', function() {
    Array.from(document.getElementsByClassName('progressBar')).forEach(function (element, i) {
        element.setAttribute('data-slick-index', i);
    });
    Array.from(document.getElementsByClassName('slick-slide')).forEach(function (element, i) {
        element.setAttribute('data-slick-index', i);
    });
}, false);
