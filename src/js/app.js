const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

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
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    headerMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    galleryMenu.classList.remove('highlight');
    //headerMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3290) {
    galleryMenu.classList.add('highlight');
    servicesMenu.classList.remove('highlight');
    priceMenu.classList.remove('highlight');
    //headerMenu.classList.remove('highlight');
    //aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 4200) {
    priceMenu.classList.add('highlight');
    galleryMenu.classList.remove('highlight');
    //servicesMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    //headerMenu.classList.remove('highlight');
    //aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 5145) {
    contactMenu.classList.add('highlight');
    priceMenu.classList.remove('highlight');
    //servicesMenu.classList.remove('highlight');
    //headerMenu.classList.remove('highlight');
    //aboutMenu.classList.remove('highlight');
    return;
  }
  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
