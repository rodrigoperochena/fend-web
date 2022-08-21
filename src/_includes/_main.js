document.addEventListener('DOMContentLoaded', () => {
  const navTab = document.querySelector('.nav-tab')
  const navMenu = document.querySelector('.nav-wrapper')
  const navTabTitleMenu = document.querySelector('.nav-tab-title--menu')
  const navTabTitleClose = document.querySelector('.nav-tab-title--close')
  const burgerIcon = document.querySelector('.burger')

  navTab.addEventListener('click', () => {
    navMenu.classList.toggle('menu-open')

    if (navMenu.classList.contains('menu-open')) {
      navTabTitleClose.style.display = 'block'
      navTabTitleMenu.style.display = 'none'
    } else {
      navTabTitleClose.style.display = 'none'
      navTabTitleMenu.style.display = 'block'
    }

    if (burgerIcon.classList.contains('x')) {
      burgerIcon.classList.remove('x')
    } else {
      burgerIcon.classList.add('x')
    }
  })
})