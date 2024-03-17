
const menuIcon = document.querySelector('.menu');
const navBar = document.querySelector('.navbar');
const dots = document.querySelector('.dots');
const loading = document.querySelector('.loading');

const isLoading3d = true;

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


function stopAnimation(){
  isLoading3d = false;
  loading.remove();
}


function animate(element, className) {
  element.classList.add(className);
  setTimeout(() => {
    element.classList.remove(className);
    setTimeout(() => {
      animate(element, className);
    }, 500);
  }, 2500);
}



animate(dots, "dots--animate");




export { stopAnimation }