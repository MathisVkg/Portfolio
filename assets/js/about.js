

let navTag = document.getElementById('navTarget');
let navTag2 = document.getElementById('navTarget2');
let navButtonOpen = document.getElementById('navButtonOpen');
let navButtonClose = document.getElementById('navButtonClose');



navButtonOpen.addEventListener('click', () => {
    navTag.classList.remove('navOff');
    navTag.classList.add('navOn');
    navTag2.classList.remove('navOff2');
    navTag2.classList.add('navOn2');
    navButtonOpen.setAttribute('style', 'z-index: 0');
})
navButtonClose.addEventListener('click', () => {
    navTag.classList.remove('navOn');
    navTag.classList.add('navOff');
    navTag2.classList.remove('navOn2');
    navTag2.classList.add('navOff2');
    navButtonOpen.setAttribute('style', 'z-index: 1');
})

