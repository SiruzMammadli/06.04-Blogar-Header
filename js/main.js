const btnOpen = document.querySelector('#header .search-bar .hamburger-icon');
const btnClose = document.querySelector('.respon-menu .menu-close');
let menu = document.querySelector('.respon-menu-area');

btnOpen.addEventListener('click', function() {
    menu.classList.add('active');
})

btnClose.addEventListener('click', function() {
    menu.classList.remove('active');
})

let menuList = document.querySelectorAll('#nav-menu .menu-list');

for (let i = 0; menuList.length; i++) {
    menuList[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}