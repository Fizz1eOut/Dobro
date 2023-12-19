const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

const lockScroll = () => {
  document.body.classList.add('lock');
};
const unlockScroll = () => {
  document.body.classList.remove('lock');
};
const scrollTop = () => {
  menu.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('burger')) {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('open');
    overlay.classList.toggle('open');
    lockScroll();
  }

  if (!e.target.classList.contains('burger--active')) {
    unlockScroll();
  }

  if (e.target.classList.contains('nav__link')) {
    burger.classList.remove('burger--active');
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll();
  }
});

overlay.addEventListener('click', () => {
  burger.classList.remove('burger--active');
  menu.classList.remove('open');
  overlay.classList.remove('open');
  unlockScroll();
});