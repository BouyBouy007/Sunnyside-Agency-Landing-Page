const hamburgerButton = document.querySelector('.mobile-hamburger-button');
const mobileMenu = document.querySelector('.top-container-right-section');

hamburgerButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('show-menu');
});