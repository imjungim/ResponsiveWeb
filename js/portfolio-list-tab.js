const portfolioTabMenu = document.querySelectorAll(
  '.portfolio-list .portfolio-item'
)
const itemBtn = document.querySelectorAll('.btn')
const portfolioImageAll = document.querySelectorAll('.portfolio-image-item')
let mode = ''

function filter(e) {
  mode = e.target.innerHTML
  portfolioImageAll.forEach((item) => {
    if (mode === 'All') {
      item.classList.remove('hide')
    } else if (!item.classList.contains(mode)) {
      item.classList.add('hide')
    } else if (item.classList.contains(mode)) {
      item.classList.remove('hide')
    }
  })
}

itemBtn.forEach((button) => {
  button.addEventListener('click', function (e) {
    e.preventDefault()
    portfolioTabMenu.forEach((item) => {
      item.classList.remove('is-on')
    })
    let item = this.parentNode
    item.classList.add('is-on')
    filter(e)
  })
})
