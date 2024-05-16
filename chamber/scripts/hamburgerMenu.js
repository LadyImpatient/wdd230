const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});

menu.addEventListener('click', () => {
  menu.classList.remove('show');
});

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('#menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', function () {
      nav.classList.toggle('active');
  });
});