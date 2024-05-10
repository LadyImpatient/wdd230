// JavaScript for toggling dark mode
const darkModeBtn = document.querySelector('.dark-mode-btn');
const main = document.querySelector('main');

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
});
