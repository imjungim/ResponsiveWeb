const sidebarBtn = document.querySelectorAll('.sidebar-list-item button')
const headerBtn = document.querySelectorAll('.nav-list-item button')

function scrollHeaderTab() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.querySelector(`#${tabPanelId}`)

  const scrollAmount = tabPanel.getBoundingClientRect().top - 72

  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  })

  if (window.innerWidth < 992) {
    sideBar.classList.remove('is-active')
    sideBarOverlay.classList.remove('is-active')
  }
}

sidebarBtn.forEach((button) => {
  button.addEventListener('click', scrollHeaderTab)
})

headerBtn.forEach((button) => {
  button.addEventListener('click', scrollHeaderTab)
})
