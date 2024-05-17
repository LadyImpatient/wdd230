document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('#menu-toggle');
  const nav = document.querySelector('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('active');
    });
  }

  nav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      nav.classList.remove('active');
      menuToggle.checked = false;
    }
  });
});
