const header = document.querySelector(".navbar")

window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 100) {
        header.classList.add('navbarBackground');
    }
    else {
        header.classList.remove('navbarBackground');
    }
}