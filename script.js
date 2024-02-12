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


const toggleMenu = () => {
    const navigation = document.querySelector('.navigation');


    const burgerMenu = document.querySelector(".menu-icon");
    const src = burgerMenu.getAttribute('src');

    const isBurger = src === 'imagens/assets/burger-menu.svg';

    const iconName = isBurger ?
        'imagens/assets/close.svg'
        :
        'imagens/assets/burger-menu.svg';


    burgerMenu.setAttribute(
        'src',
        iconName
    );

    if (!isBurger) {
        navigation.classList.add("navigation--mobile--fadeout");
        setTimeout(() => {
            navigation.classList.toggle(
                'navigation--mobile'
            );
        }, 300)
    } else {
        navigation.classList.remove("navigation--mobile--fadeout");
        navigation.classList.toggle(
            'navigation--mobile'
        );
    }
};