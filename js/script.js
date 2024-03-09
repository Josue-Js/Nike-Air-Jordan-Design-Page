
const menuIcon = document.querySelector('.menu');
const navBar = document.querySelector('.navbar');



navBar.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    navBar.classList.remove('open')
  }
});


menuIcon.addEventListener('click', (event) => {
  const [_, classOpen] = navBar.classList;

  if (!classOpen) {
    navBar.classList.add('open')
  }
});