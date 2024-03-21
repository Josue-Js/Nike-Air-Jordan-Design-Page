
const menuIcon = document.querySelector('.menu');
const navBar = document.querySelector('.navbar');
const imgPreview = document.querySelector('.preview');
const loading = document.querySelector('.loading');

var isLoading3d = true;

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
  imgPreview.remove();
}







export { stopAnimation }