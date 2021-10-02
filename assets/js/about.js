

let navTag = document.getElementById('navTarget');
let navButtonOpen = document.getElementById('navButtonOpen');
let navButtonClose = document.getElementById('navButtonClose');


navButtonOpen.addEventListener('click', () => {
    navTag.classList.remove('navOff');
    navTag.classList.add('navOn');
})
navButtonClose.addEventListener('click', () => {
    navTag.classList.remove('navOn');
    navTag.classList.add('navOff');
})