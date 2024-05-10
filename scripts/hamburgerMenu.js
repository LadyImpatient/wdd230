const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});