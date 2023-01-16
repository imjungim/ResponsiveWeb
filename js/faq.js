const faqItemButton = document.querySelectorAll('.faq-item-button')

function faqOpen() {
  this.classList.toggle('is-active')
}

faqItemButton.forEach((button) => {
  button.addEventListener('click', faqOpen)
})
