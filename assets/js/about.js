
let navTag = document.getElementById('navTarget');
let navTag2 = document.getElementById('navTarget2');
let navButtonOpen = document.getElementById('navButtonOpen');
let navButtonClose = document.getElementById('navButtonClose');
let header = document.getElementById('headerTagert');
let body = document.body;



navButtonOpen.addEventListener('click', () => {
    header.setAttribute('style', 'z-index: 1');
    // header.setAttribute('style', 'display: flex');
    // setTimeout(function() {
        navTag.classList.remove('navOff');
        navTag2.classList.remove('navOff2');

        navTag.classList.add('navOn');
        navTag2.classList.add('navOn2');
    // }, 20);
    navButtonOpen.style.zIndex = null;
})
navButtonClose.addEventListener('click', () => {
    navTag.classList.remove('navOn');
    navTag2.classList.remove('navOn2');

    navTag.classList.add('navOff');
    navTag2.classList.add('navOff2');
    // setTimeout(function() {
    //     header.setAttribute('style', 'display: none');
    // }, 1000);
    header.style.zIndex = -1;
    navButtonOpen.setAttribute('style', 'z-index: 1');
})

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
});