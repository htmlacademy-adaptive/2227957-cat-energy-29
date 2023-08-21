let navToggle = document.querySelector('.main-header__toggle');
let navMain = document.querySelector('.main-nav');

navToggle.classList.remove('main-header__toggle--nojs');
navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('main-header__toggle--closed')) {
    navToggle.classList.remove('main-header__toggle--closed');
    navToggle.classList.add('main-header__toggle--opened');
    navMain.classList.remove('main-nav--closed');
  } else {
    navToggle.classList.add('main-header__toggle--closed');
    navToggle.classList.remove('main-header__toggle--opened');
    navMain.classList.add('main-nav--closed');
  }
});
