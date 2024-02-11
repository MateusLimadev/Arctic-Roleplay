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


document.addEventListener("DOMContentLoaded", function () {
    var mobileMenuButton = document.querySelector(".mobile-menu-icon button");
    var body = document.body;

    mobileMenuButton.addEventListener("click", function () {
        body.classList.toggle("menu-opened");
    });
});