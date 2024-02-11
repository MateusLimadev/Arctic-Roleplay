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
