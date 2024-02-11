document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('transparent-blur');
        } else {
            navbar.classList.remove('transparent-blur');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.hamburguer-icon');
    var mobileNav = document.querySelector('#navbar-mobile');

    menuIcon.onclick = function () {
        mobileNav.classList.toggle('menu-open');
    };
});
