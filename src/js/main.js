//  Declare Variables
let body = document.querySelector('body');
let header = document.querySelector('.header');
let menu = document.querySelector('.header__menu');
let menuToggle = document.querySelector('.header__menu-toggle');
let menuLinks = document.querySelectorAll('.header__link');

// Include Menuspy JS
var elm = document.querySelector('#scrollspy'); // Desktop Menu
var ms = new MenuSpy(elm, {
  activeClass: 'header__item--current',
  enableLocationHash: false,
});

// Toggle the mobile menu when you click the menu toggle button
menuToggle.addEventListener('click', function () {
  menuToggle.classList.toggle('is-active');
  menu.classList.toggle('header__menu--open');
  body.classList.toggle('disable-scroll');
});

// Close the moblie menu when you click on any mobile link
for (i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', function () {
    menuToggle.classList.remove('is-active');
    menu.classList.remove('header__menu--open');
    body.classList.remove('disable-scroll');
  });
}

window.addEventListener('scroll', () => {
  // Change header opacity/color/shadow/etc when scrolled away from top
  if (window.pageYOffset > 0) {
    header.classList.add('header--active');
  }

  // Otherwise, revert header opacity/color/shadow/etc when scrolled back to top
  else if (window.pageYOffset === 0) {
    header.classList.remove('header--active');
  }
});
