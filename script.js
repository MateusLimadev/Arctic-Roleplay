document.addEventListener('DOMContentLoaded', function () {
    var prevScrollpos = window.pageYOffset;

    window.addEventListener('scroll', function () {
        var currentScrollPos = window.pageYOffset;
        var header = document.getElementById('navbar');

        if (prevScrollpos > currentScrollPos) {
            // Rolar para cima - tornar o header sólido
            header.classList.remove('transparent-blur');
            header.classList.add('solid');
        } else {
            // Rolar para baixo - tornar o header transparente
            header.classList.remove('solid');
            header.classList.add('transparent-blur');
        }

        prevScrollpos = currentScrollPos;
    });
});
