const menu = document.querySelector('.menu')

function menuMobile() {
  if (menu.classList == 'menu') {
    menu.classList.add('menu-open-close')
  } else {
    menu.classList.remove('menu-open-close')
  }
}