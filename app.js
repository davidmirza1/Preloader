//Need to make a function that gets read by the preloader

window.addEventListener('load', () => {
  const preloader = document.querySelector('.preload');
  preloader.classList.add('preload-finish');
});