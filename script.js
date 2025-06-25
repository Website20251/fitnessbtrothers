let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/* Typing Text Code */
const typed = new Typed('.multiple-text', {
    strings: ['Entrenamiento de Fuerza', 'Entrenamiento en Máquina', 'Crossfit', 'Entrenamiento Funcional', 'Levantamiento de Pesas', 'Cardio'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

document.getElementById('whatsapp-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const mensaje = encodeURIComponent('Hola, me gustaria acercarme para la clase gratuita, me brindaría información de la dirección');
    const telefono = '51925097827';
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
});

document.getElementById('promo-1mes-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const mensaje = encodeURIComponent('Hola, estoy interesado en la promoción 2 x 1 por 1 mes, deseo más información.');
    const telefono = '51925097827';
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
});

document.getElementById('promo-3meses-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const mensaje = encodeURIComponent('Hola, estoy interesado en la promoción 2 x 1 por 3 meses, deseo más información.');
    const telefono = '51925097827';
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
});

document.getElementById('promo-6meses-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const mensaje = encodeURIComponent('Hola, estoy interesado en la promoción 2 x 1 por 6 meses, deseo más información.');
    const telefono = '51925097827';
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
});

document.getElementById('contact').addEventListener('click', function(e) {
    e.preventDefault();
    const mensaje = encodeURIComponent('Hola, deseo mas información sobre las promociones, por favor.');
    const telefono = '51925097827';
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
});

