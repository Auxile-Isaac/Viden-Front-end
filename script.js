let header = document.getElementById("header");
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (window.matchMedia("(min-width: 768px)").matches && currentScrollPos > 0){
        header.style.backgroundColor = "#5f9dc7";
    }else if (window.matchMedia("(max-width: 768px)").matches && currentScrollPos > 0){
        header.style.backgroundColor = "#fff";
    }else{
        header.style.backgroundColor = "transparent";
    }
    // if (currentScrollPos > 0) {
    //     header.style.backgroundColor = "#5f9dc7";
    // } else {
    //     header.style.backgroundColor = "transparent";
    // }
}

document.addEventListener("DOMContentLoaded", function() {
    let currentYear = new Date().getFullYear();
    document.getElementById("copyrightYear").innerText = currentYear;
});

function toggleMenu() {
    var navigationMenu = document.querySelector('.navigations ul');
    navigationMenu.classList.toggle('show');
}

