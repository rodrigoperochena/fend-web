document.addEventListener('DOMContentLoaded', () => {
  const navTab = document.querySelector('.nav-tab')
  const navMenu = document.querySelector('.nav-wrapper')
  const navTabTitleMenu = document.querySelector('.nav-tab-title--menu')
  const navTabTitleClose = document.querySelector('.nav-tab-title--close')
  const burgerIcon = document.querySelector('.burger')
  const pageOverlay = document.querySelector('.page-overlay')
  const pageOverlayActive = document.querySelector('.page-overlay--active')

  navTab.addEventListener('click', () => {
    navMenu.classList.toggle('menu-open')

    if (navMenu.classList.contains('menu-open')) {
      navTabTitleClose.style.display = 'flex'
      navTabTitleMenu.style.display = 'none'
      pageOverlay.classList.add('page-overlay--active')
    } else {
      navTabTitleClose.style.display = 'none'
      navTabTitleMenu.style.display = 'flex'
      pageOverlay.classList.remove('page-overlay--active')
    }

    if (burgerIcon.classList.contains('x')) {
      burgerIcon.classList.remove('x')
    } else {
      burgerIcon.classList.add('x')
    }
  })

  pageOverlay.addEventListener('click', () => {
    navMenu.classList.toggle('menu-open')
    burgerIcon.classList.remove('x')
    pageOverlay.classList.remove('page-overlay--active')
    navTabTitleClose.style.display = 'none'
    navTabTitleMenu.style.display = 'flex'
  })

  document.body.addEventListener('keyup', (a) => {
    if (a.key === 'Escape' && pageOverlay.classList.contains('page-overlay--active')) {
      navMenu.classList.remove('menu-open')
      burgerIcon.classList.remove('x')
      pageOverlay.classList.remove('page-overlay--active')
      navTabTitleClose.style.display = 'none'
      navTabTitleMenu.style.display = 'flex'
    }
  })

})