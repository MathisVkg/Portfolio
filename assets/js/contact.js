

let navTag = document.getElementById('navTarget');
let navTag2 = document.getElementById('navTarget2');
let navButtonOpen = document.getElementById('navButtonOpen');
let navButtonClose = document.getElementById('navButtonClose');
let header = document.getElementById('headerTagert');
let body = document.body;



navButtonOpen.addEventListener('click', () => {
    header.setAttribute('style', 'z-index: 1');
        navTag.classList.remove('navOff');
        navTag.classList.add('navOn');
    navButtonOpen.style.zIndex = null;
})
navButtonClose.addEventListener('click', () => {
    navTag.classList.remove('navOn');
    navTag.classList.add('navOff');
    header.style.zIndex = -1;
    navButtonOpen.setAttribute('style', 'z-index: 1');
})
