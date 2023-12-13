let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.querySelector('#navigation-items');
let capuccino = document.querySelector('#capuccino');
let bebidas = document.querySelector('#menu-inferior');
let redes = document.querySelector('#redes');

const hamburgerEvent = (navigation, close, open, coffe, menu, redes) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
    capuccino.style.display = coffe;
    bebidas.style.display = menu;
    redes.style.display = redes;
};

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none", "none", "none", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block", "block", "flex", "flex"));