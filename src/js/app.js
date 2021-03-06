const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const button = document.querySelector('.future__batton');
const commingSoon = document.querySelector('.comming-soon');
const button_aboytus = document.querySelector('#aboutuss_batton');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');
const button_close = document.querySelector('.modal__close');
const modal__dialog = document.querySelector('.modal__dialog');
// shop button
const shopButton = () => {
  button.classList.add('no-active--batton');
  commingSoon.classList.remove('no-active--batton');
};
button.addEventListener('click', shopButton);

// display mobile menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);
//show active menu when scrolling

const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const headerMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#works-page');
  const servicesMenu = document.querySelector('#price-page');
  const galleryMenu = document.querySelector('#services-page');
  const priceMenu = document.querySelector('#kontakt-page');
  const contactMenu = document.querySelector('#kontakt-page2');
  let scrollPos = window.scrollY;

  if (window.innerWidth > 960 && scrollPos < 600) {
    headerMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1800) {
    aboutMenu.classList.add('highlight');
    headerMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3000) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    galleryMenu.classList.remove('highlight');

    return;
  } else if (window.innerWidth > 960 && scrollPos < 4600) {
    galleryMenu.classList.add('highlight');
    servicesMenu.classList.remove('highlight');
    priceMenu.classList.remove('highlight');

    return;
  } else if (window.innerWidth > 960 && scrollPos < 6000) {
    priceMenu.classList.add('highlight');
    galleryMenu.classList.remove('highlight');

    contactMenu.classList.remove('highlight');

    return;
  } else if (window.innerWidth > 960 && scrollPos < 8000) {
    contactMenu.classList.add('highlight');
    priceMenu.classList.remove('highlight');

    return;
  }
  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//modall window
const modalButton = () => {
  modal.classList.add('show');
  body.classList.add('no-scroll');
};
button_aboytus.addEventListener('click', modalButton);

const closeButton = () => {
  modal.classList.remove('show');
  body.classList.remove('no-scroll');
};
modal.addEventListener('click', closeButton);
button_close.addEventListener('click', closeButton);

modal__dialog.addEventListener('click', function (event) {
  event.stopPropagation();
});
//swipe slider

var swiper = new Swiper('.modal-about__img', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
