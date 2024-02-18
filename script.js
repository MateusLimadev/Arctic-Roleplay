

const btnmobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
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

window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    var scrollPosition = window.scrollY;

    // Adiciona ou remove a classe 'transparent' com base no scroll
    if (scrollPosition > 0) {
        header.classList.remove('transparent');
    } else {
        header.classList.add('transparent');
    }
});


const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

let contador = 0;

function slider() {
    contador++;
    
    if (contador > imagens.length - 1) {
        contador = 0;
    }

    box.style.transform = `translateX(${-contador * 1280}px)`;
}

setInterval(slider, 3000);
