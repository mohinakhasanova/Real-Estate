// Nav Menu
const navbar = document.querySelector('.navbar');
const button = document.querySelector('.menu-button');

button.addEventListener('click', (e) =>  {
  navbar.classList.toggle('active');
});

window.addEventListener('click', e => {
  const target = e.target;
  if (!target.closest('.navbar') && !target.closest('.menu-button')) {
    navbar.classList.remove('active');
  }
});












