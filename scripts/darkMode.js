// JavaScript for toggling dark mode
const darkModeBtn = document.querySelector('.dark-mode-btn');
const main = document.querySelector('main');

darkModeBtn.addEventListener('click', () => {
    main.classList.toggle('dark-mode');
});