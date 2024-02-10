
const burger = document.getElementById('burger');
const nav = document.querySelector('.nav-links');


burger.addEventListener('click', toggle);
function toggle(){
  nav.classList.toggle('nav-active');
}