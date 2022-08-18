document.addEventListener('DOMContentLoaded', () => {
  const burgerIcon = document.querySelector('.burger')
  const navMenu = document.querySelector('.nav-wrapper')

  burgerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('menu-open')
  })
})