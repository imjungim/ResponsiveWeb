const menuButton = document.querySelector('.menu-button');
const sideBar = document.querySelector('.sidebar');
const sideBarOverlay = document.querySelector('.overlay');
console.log(sideBarOverlay)


function sideBarOpen() {
  sideBar.classList.add('is-active')
  sideBarOverlay.classList.add('is-active')
}

function sideBarClose() {
  sideBar.classList.remove('is-active')
  sideBarOverlay.classList.remove('is-active')
}

menuButton.addEventListener('click', sideBarOpen)
sideBarOverlay.addEventListener('click', sideBarClose)