document.addEventListener('DOMContentLoaded', () => {
  const navTab = document.querySelector('.nav-tab')
  const navMenu = document.querySelector('nav')
  const navTabTitleMenu = document.querySelector('.nav-tab-title--menu')
  const navTabTitleClose = document.querySelector('.nav-tab-title--close')
  const burgerIcon = document.querySelector('.burger')
  const pageOverlay = document.querySelector('.page-overlay')

  navTab.addEventListener('click', () => {
    navMenu.classList.toggle('nav--open')

    if (navMenu.classList.contains('nav--open')) {
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
    navMenu.classList.toggle('nav--open')
    burgerIcon.classList.remove('x')
    pageOverlay.classList.remove('page-overlay--active')
    navTabTitleClose.style.display = 'none'
    navTabTitleMenu.style.display = 'flex'
  })

  document.body.addEventListener('keyup', (a) => {
    if (a.key === 'Escape' && pageOverlay.classList.contains('page-overlay--active')) {
      navMenu.classList.remove('nav--open')
      burgerIcon.classList.remove('x')
      pageOverlay.classList.remove('page-overlay--active')
      navTabTitleClose.style.display = 'none'
      navTabTitleMenu.style.display = 'flex'
    }
  })


  // BLOCKPICKING MOCKUP - UPDATING ELEMENTS
  const gridButton = document.querySelector('.grid-button')
  const centerBlock = document.querySelector('.center-block')

  gridButton.addEventListener('click', () => {
    centerBlock.classList.toggle('block-active')
    updateElements()
  })

  let updateElements = () => {
    const buyQuantity = document.querySelector('.number')
    const price = document.querySelector('.header-button-pricetag')

    if (centerBlock.classList.contains('block-active')) {
      buyQuantity.innerText = '0.5 '
      price.innerText = '$60'
    } 
    
    else {
      buyQuantity.innerText = '0.0 '
      price.innerText = '$0'
    }

  }

})