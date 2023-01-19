const topBtn = document.querySelector('.back-to-top')

window.addEventListener('scroll', function () {
  const scroll = window.scrollY
  if (scroll < 300) {
    topBtn.classList.remove('is-active')
  } else if (scroll > 300) {
    topBtn.classList.add('is-active')
  }
})

topBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
})
