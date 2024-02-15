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


const btnmobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault(); // Fix the typo here
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);

    if (active) { 
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnmobile.addEventListener('click', toggleMenu);
btnmobile.addEventListener('touchstart', toggleMenu);
