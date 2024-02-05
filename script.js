let header = document.getElementById("header");
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        header.style.backgroundColor = "transparent";
    } else {
        header.style.backgroundColor = "#5f9dc7";
    }

    prevScrollpos = currentScrollPos;
}