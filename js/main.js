var menuBtn = document.querySelector('.header__menu-btn')
var menu = document.querySelector('.menu')
var menuCloseBtn = document.querySelector('.menu__close-btn')

menuBtn.addEventListener('click', function () {
	menu.classList.add('show')
})
menuCloseBtn.addEventListener('click', function () {
	menu.classList.remove('show')
})
