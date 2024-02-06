let header = document.getElementById("header");
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (window.matchMedia("(min-width: 768px)").matches && currentScrollPos > 0){
        header.style.backgroundColor = "#5f9dc7";
    }else if (window.matchMedia("(max-width: 768px)").matches && currentScrollPos > 0){
        header.style.backgroundColor = "#5f9dc7";
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


// Get all navigation links
const navLinks = document.querySelectorAll('.navigations a');

// Function to add or remove underline class based on scroll position
function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        const top = section.offsetTop - 50; // Adjust this value as needed
        const bottom = top + section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= top && scrollPosition < bottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
}

// Add scroll event listener to update active link
window.addEventListener('scroll', updateActiveLink);

// Call updateActiveLink initially to set active link on page load
updateActiveLink();
